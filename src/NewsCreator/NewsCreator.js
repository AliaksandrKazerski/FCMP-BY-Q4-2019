import {
  A_ELEMENT, 
  DIV_ELEMENT, 
  BLOCK_CLASS_NAME, 
  NEWS_CLASS_NAME,
  URL_FIELD
} from './constants';

import { createElement, addClass } from '../utils/dom-ultils';

import './NewsCreator.scss';

export default class NewsCreator {
  constructor() {
    this.div = null;
  }

  createNews(newsObject) {
    if (this.div) {
      this.div.remove();
    }
    this.div = createElement(DIV_ELEMENT);
    addClass(this.div, BLOCK_CLASS_NAME);
    newsObject.forEach(news => this.createNewsElement(news));
    document.body.appendChild(this.div);
  }

  createNewsElement(news) {
    const newsElement = createElement(DIV_ELEMENT);
    addClass(newsElement, NEWS_CLASS_NAME);
    for (const key in news) {
      if (key === URL_FIELD) {
        const newsElementField = createElement(A_ELEMENT);
        addClass(newsElementField, key);
        newsElementField.href = news[key];
        newsElementField.innerText = news[key];
        newsElement.appendChild(newsElementField);
      } else {
        const newsElementField = createElement(DIV_ELEMENT);
        addClass(newsElementField, key);
        newsElementField.innerText = news[key];
        newsElement.appendChild(newsElementField);
      }
    }
    this.div.appendChild(newsElement);
  }

  deleteNews() {
    this.div.remove();
  }
}
