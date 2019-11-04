import Store from '../Store/Store';
import Wrapper from './Wrapper';

import createElement from '../utils/dom-utils/create-element';
import addClass from '../utils/dom-utils/add-class';

import {
  INPUT_ELEMENT, 
  INPUT_EVENT, 
  QUERY_FIELD, 
  DIV_ELEMENT, 
  TEXT_SEARCH,
  H2_ELEMENT,
  CLASS_FILTER_WRAPPER,
  CLASS_HEADER,
} from './constants';

const store = new Store();

export default class Input {
  createInput(className) {
    const inputWrapper = Wrapper.createWrapper(DIV_ELEMENT);
    const headerInput = createElement(H2_ELEMENT);
    const input = createElement(INPUT_ELEMENT);

    addClass(headerInput, CLASS_HEADER);
    addClass(inputWrapper, CLASS_FILTER_WRAPPER);
    headerInput.innerText = TEXT_SEARCH;
    input.classList.add(className);
    inputWrapper.appendChild(headerInput);
    inputWrapper.appendChild(input);
    input.addEventListener(INPUT_EVENT, this.inputChangeValue);

    return inputWrapper;
  }

  inputChangeValue(e) {
    store.changeState(QUERY_FIELD, e.target.value);
  }
}
