import {
  CLASS_WRAPPER,
  DIV_ELEMENT,
  H2_ELEMENT,
  UL_ELEMENT,
  LI_ELEMENT,
  CLICK_EVENT,
  DATA_ATTRIBUTE,
  CLASS_ACTIVE,
  CLASS_FILTERS,
  CLASS_HEADER, DATA_ENDPOINT,
  TYPE_FILTER,
} from './constants';

import createElement from '../utils/dom-utils/create-element';
import addClass from "../utils/dom-utils/add-class";

import './FilterCreator.scss';

export default class FilterCreator {
  constructor(state, app) {
    this.state = state;
    this.app = app;
    this.elements = {};
    this.wrapper = null;
    this.ul = null;

    this.state.changeQuery = this.state.changeQuery.bind(this.state);
    this.changeActiveClass = this.changeActiveClass.bind(this);

    this.wrapper = createElement(DIV_ELEMENT);
    addClass(this.wrapper, CLASS_FILTERS);
    document.body.appendChild(this.wrapper);
  }

  async getFilterInitialization(category, typeFilter) {
    try {
      const newsObject = await this.app.getNews(typeFilter);
      const categorys = newsObject
        .map(news => news[category]);
      this.createFilters([...new Set(categorys)], category, typeFilter);
    } catch (e) {
      console.log(e);
    }
  }

  createFilters(filters, category, typeFilter) {
    const filterWrapper = createElement(DIV_ELEMENT);
    addClass(filterWrapper, CLASS_WRAPPER);
    const header = createElement(H2_ELEMENT);
    addClass(header, CLASS_HEADER);
    if (typeFilter === TYPE_FILTER.NEWS) {
      header.innerText = TYPE_FILTER.NEWS;
    } else {
      header.innerText = category;
    }
    filterWrapper.appendChild(header);
    this.ul = createElement(UL_ELEMENT);
    addClass(this.ul, category);
    filters
      .map(filter => this.createFilter(filter, category, typeFilter))
      .forEach(element => this.ul.appendChild(element));
    filterWrapper.appendChild(this.ul)
    this.wrapper.appendChild(filterWrapper);
  }

  createFilter(filter, category, typeFilter) {
    const element = createElement(LI_ELEMENT);
    element.innerText = filter;
    element.setAttribute(DATA_ATTRIBUTE, category);
    element.setAttribute(DATA_ENDPOINT, typeFilter);
    element.addEventListener(CLICK_EVENT, this.state.changeQuery);
    element.addEventListener(CLICK_EVENT, this.changeActiveClass);
    if (!this.elements[category]) {
      this.elements[category] = [];
    }
    this.elements[category].push(element);
    return element;
  }

  changeActiveClass(e) {
    const category = e.target.dataset.category;

    e.target.classList.toggle(CLASS_ACTIVE);
    this.elements[category].forEach(element => {
      if (element !== e.target) {
        element.classList.remove(CLASS_ACTIVE);
      }
    });
  }

  removeFilters() {
    for (const category in this.elements) {
      this.elements[category].forEach(element => element.removeEventListener(CLICK_EVENT, this.state.changeQuery));
      this.elements[category].forEach(element => element.removeEventListener(CLICK_EVENT, this.changeActiveClass));
    }
    this.ul.remove();
  }
}
