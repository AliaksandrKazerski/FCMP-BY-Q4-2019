import { UL, LI, CLICK_EVENT, DATA_ATTRIBUTE } from './constants';

export default class FilterCreator {
  constructor (state, app) {
    this.state = state;
    this.app = app;
    this.elements = [];
    this.ul = null;
    this.state.changeQuery = this.state.changeQuery.bind(this.state);
    this.changeFocusClass = this.changeFocusClass.bind(this);
  }
  
  createFilters(filters, category) {
    this.ul = document.createElement(UL);
    this.ul.classList.add(category);
    filters
      .map(filter => this.createFilter(filter, category))
      .forEach(element => this.ul.appendChild(element));
    document.body.appendChild(this.ul); 
  }

  createFilter(filter, category) {
    const element = document.createElement(LI);
    element.innerText = filter;
    element.setAttribute(DATA_ATTRIBUTE, category);
    element.addEventListener(CLICK_EVENT, this.state.changeQuery);
    element.addEventListener(CLICK_EVENT, this.changeFocusClass);
    this.elements.push(element);
    return element;
  }

  changeFocusClass(e) {
    e.target.classList.toggle('focus');
  }

  removeFilters() {
    this.elements.forEach(element => element.removeEventListener(CLICK_EVENT, this.state.changeQuery));
    this.elements.forEach(element => element.removeEventListener(CLICK_EVENT, this.changeFocusClass));
    this.ul.remove();
  }

  async getFilterInitialization(category) {
    try {
      const newsObject = await this.app.getNews();
      const categorys = newsObject
        .map(news => news[category]);
      this.createFilters([...new Set(categorys)], category);
    } catch (e) {
      console.log(e);
    }
  }
}