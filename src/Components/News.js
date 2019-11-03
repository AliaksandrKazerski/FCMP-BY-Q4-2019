import createElement from '../utils/dom-utils/create-element';
import addClass from '../utils/dom-utils/add-class';

import {
  DIV_ELEMENT, 
  NEWS_CLASS_NAME, 
  URL_FIELD, 
  URL_TO_IMAGE, 
  IMG_ELEMENT, 
  A_ELEMENT,
  TYPE_OBJECT,
  SRC_ATTRIBUTE,
} from './constants';

export default class News {
  static createNews(news) {
    const newsElement = createElement(DIV_ELEMENT);
    addClass(newsElement, NEWS_CLASS_NAME);
    for (const key in news) {
      if (typeof(news[key]) === TYPE_OBJECT) {
        continue;
      }
      if (key === URL_TO_IMAGE) {
        if (news[URL_TO_IMAGE]) {
          const newsElementField = createElement(IMG_ELEMENT);
          newsElementField.setAttribute(SRC_ATTRIBUTE, news[URL_TO_IMAGE]);
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
    return newsElement;
  }
}
