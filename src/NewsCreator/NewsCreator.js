import {
  IMG_ELEMENT,
  A_ELEMENT,
  DIV_ELEMENT,
  BLOCK_CLASS_NAME,
  NEWS_CLASS_NAME,
  URL_FIELD,
  URL_TO_IMAGE,
} from './constants';

import createElement from '../utils/dom-utils/create-element';
import addClass from "../utils/dom-utils/add-class";

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
      if (typeof(news[key]) === 'object') {
        continue;
      }
      if (key === URL_TO_IMAGE) {
        if (news[URL_TO_IMAGE]) {
          const newsElementField = createElement(IMG_ELEMENT);
          newsElementField.setAttribute('src', news[URL_TO_IMAGE]);
          newsElement.appendChild(newsElementField);
        }
      } else if (key === URL_FIELD) {
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
