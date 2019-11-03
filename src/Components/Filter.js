import Wrapper from './Wrapper';
import Store from '../Store/Store';

import addClass from '../utils/dom-utils/add-class';
import createElement from '../utils/dom-utils/create-element';

import {
  H2_ELEMENT, 
  CLASS_HEADER, 
  DATA_ATTRIBUTE, 
  DIV_ELEMENT, 
  SELECT_ELEMENT,
  CLASS_FILTER_WRAPPER,
  CHANGE_EVENT,
  OPTION_ELEMENT,
  ACTIVE_FILTERS_FIELD,
  NEWS_CATEGORY,
  SOURCES_FIELD,
  DEFAULT_VALUE_SELECT,
  HEADER_ID,
  HEADER_NEWS,
} from './constants';

const store = new Store();

export default class Filter {

  createFilter(headerText, filters) {
    const wrapper = Wrapper.createWrapper(DIV_ELEMENT, CLASS_FILTER_WRAPPER);
    const header = createElement(H2_ELEMENT);
    const select = createElement(SELECT_ELEMENT);

    if (headerText === HEADER_ID) {
      headerText = HEADER_NEWS;
    }
    select.setAttribute(DATA_ATTRIBUTE, headerText);
    select.addEventListener(CHANGE_EVENT, this.filterChangeValue);
    addClass(header, CLASS_HEADER);
    header.innerText = headerText;
    wrapper.appendChild(header);
    filters.forEach((filter) => {
      const option = createElement(OPTION_ELEMENT);

      option.innerText = filter;
      select.appendChild(option);
    })
    select.value = DEFAULT_VALUE_SELECT;
    wrapper.appendChild(select);

    return wrapper;
  }

  filterChangeValue(e) {
    const category = e.target.dataset.category

    if (category === NEWS_CATEGORY) {
      store.changeState(SOURCES_FIELD, e.target.selectedOptions[0].innerText);
    } else {
      const state = store.getState();
      
      if (state[ACTIVE_FILTERS_FIELD]) {
        store.changeState(ACTIVE_FILTERS_FIELD, { ... state[ACTIVE_FILTERS_FIELD], [category]: e.target.selectedOptions[0].innerText});
      } else {
        store.changeState(ACTIVE_FILTERS_FIELD, {[category]: e.target.selectedOptions[0].innerText});
      }
    }
  }  
}
