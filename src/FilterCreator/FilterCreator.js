import { UL, LI, CLICK_EVENT, DATA_ATRIBUTE } from './constants';

export default class FilterCreator {
  constructor (state, app) {
    this.state = state;
    this.app = app;
    this.elements = [];
    this.ul = null;
  }
  
  createFilters(filters, category) {
    this.ul = document.createElement('ul');
    this.ul.classList.add(category);
    filters
      .map(filter => this.createFilter(filter, category))
      .forEach(element => this.ul.appendChild(element));
    document.body.appendChild(this.ul); 
  }

  createFilter(filter, category) {
    const element = document.createElement('li');
    element.innerText = filter;
    element.setAttribute('data-category', category);
    element.addEventListener('click', this.state.changeQuery);
    this.elements.push(element);
    return element;
  }

  removeFilters() {
    debugger;
    this.elements.forEach(element => element.removeEventListener('click', this.state.changeQuery));
    this.ul.remove();
  }

  async filterInitialization(category) {
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