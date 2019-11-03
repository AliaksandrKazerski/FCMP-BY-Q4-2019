import Store from '../Store/Store';

import {INPUT_ELEMENT, INPUT_EVENT, QUERY_FIELD} from './constants';

const store = new Store();

export default class Input {
  createInput(className) {
    const element = document.createElement(INPUT_ELEMENT);
    element.classList.add(className);

    element.addEventListener(INPUT_EVENT, this.inputChangeValue);

    return element;
  }

  inputChangeValue(e) {
    store.changeState(QUERY_FIELD, e.target.value);
  }
}