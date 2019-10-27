import {
  DIV, 
  UL, 
  LI, 
  CLICK_EVENT, 
  DATA_ATTRIBUTE, 
  CLASS_FOCUS, 
  CLASS_FILTERS
 } from './constants';

import './FilterCreator.scss';

export default class FilterCreator {
  constructor (state, app) {
    this.state = state;
    this.app = app;
    this.elements = {};
    this.wrapper = null;
    this.ul = null;
    this.state.changeQuery = this.state.changeQuery.bind(this.state);
    this.changeFocusClass = this.changeFocusClass.bind(this);
    this.wrapper = document.createElement(DIV);
    this.wrapper.classList.add(CLASS_FILTERS);
    document.body.appendChild(this.wrapper);
  }
  
  createFilters(filters, category) {
    this.ul = document.createElement(UL);
    this.ul.classList.add(category);
    filters
      .map(filter => this.createFilter(filter, category))
      .forEach(element => this.ul.appendChild(element));
    this.wrapper.appendChild(this.ul); 
  }

  createFilter(filter, category) {
    const element = document.createElement(LI);
    element.innerText = filter;
    element.setAttribute(DATA_ATTRIBUTE, category);
    element.addEventListener(CLICK_EVENT, this.state.changeQuery);
    element.addEventListener(CLICK_EVENT, this.changeFocusClass);
    if (!this.elements[category]) {
      this.elements[category] = [];
    }
    this.elements[category].push(element);
    return element;
  }

  changeFocusClass(e) {
    const category = e.target.dataset.category;
    e.target.classList.toggle(CLASS_FOCUS);
    this.elements[category].forEach(element => {
      if (element !== e.target) {
        element.classList.remove(CLASS_FOCUS);
      }
    });
  }

  removeFilters() {
    for (category in this.elements) {
      this.elements[category].forEach(element => element.removeEventListener(CLICK_EVENT, this.state.changeQuery));
      this.elements[category].forEach(element => element.removeEventListener(CLICK_EVENT, this.changeFocusClass));
    }
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