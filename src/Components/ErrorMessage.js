import Wrapper from './Wrapper';

import createElement from '../utils/dom-utils/create-element';

import {DIV_ELEMENT, CLASS_ERROR, P_ELEMENT, QUERY_ERROR} from './constants';

let instance = null;

export default class ErrorMesage {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.log = [];

    return instance;
  }

  createError(message) {
    const error = document.querySelector(QUERY_ERROR);

    if (error) {
      this.deleteError(error);
    }
    const wrapperError = Wrapper.createWrapper(DIV_ELEMENT, CLASS_ERROR);
    const errorText = createElement(P_ELEMENT);

    errorText.innerText = message;
    wrapperError.appendChild(errorText);
    document.body.appendChild(wrapperError);
    this.log.push(message);
  }

  logErrors() {
    this.log.forEach(error => console.log(error));
  }

  deleteError(error) {
    error.remove();
  }
}
