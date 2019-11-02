import QueryCreator from '../QueryCreator/QueryCreator';

import {BUTTON_ELEMENT, CLICK_EVENT} from './constants';

export default class Button {
  static createButton(text, className) {
    const element = document.createElement(BUTTON_ELEMENT);

    element.addEventListener(CLICK_EVENT, QueryCreator.createNewQuery);
    element.innerText = text;
    if (className) {
      element.classList.add(className);
    }

    return element;
  }
}
