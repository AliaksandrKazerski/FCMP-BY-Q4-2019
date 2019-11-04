import QueryCreator from '../QueryCreator/QueryCreator';

import clearDocument from '../utils/dom-utils/clear-document'

import {BUTTON_ELEMENT, CLICK_EVENT, DATA_ATTRIBUTE} from './constants';

export default class Button {
  static createButton(text, className, attribute) {
    const element = document.createElement(BUTTON_ELEMENT);

    element.addEventListener(CLICK_EVENT, clearDocument);
    element.addEventListener(CLICK_EVENT, QueryCreator.createNewQuery);
    element.innerText = text;
    if (className) {
      element.classList.add(className);
    }
    if (attribute) {
      element.setAttribute(DATA_ATTRIBUTE, attribute);
    }

    return element;
  }
}
