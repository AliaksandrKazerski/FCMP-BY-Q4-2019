import NewsApp from '../NewsApp/NewsApp';
import Wrapper from '../Components/Wrapper';
import Filter from '../Components/Filter';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Store from '../Store/Store';

import {
  DIV_ELEMENT,
  CLASS_FILTERS,
  TYPE_FILTER,
  FILTERS_FIELD,
  CLASS_NON_SOURCES_WRAPPER,
  CLASS_SOURCES_WRAPPER,
  CLASS_NON_SOURCES_BUTTON,
  CLASS_SOURCES_BUTTON,
  TEXT_GET_NEWS,
  CLASS_INPUT_QUERY,
  CLASS_INPUT_WRAPPER,
  ATTRIBUTE_QUERY,
  CLASS_QUERY_BUTTON,
  ATTRIBUTE_NON_SOURCES,
  ATTRIBUTE_SOURCES,
} from './constants';

import './FilterCreator.scss';

const store = new Store;

export default class FilterCreator {
  constructor() {
    this.wrapper = null;

    this.wrapper = Wrapper.createWrapper(DIV_ELEMENT, CLASS_FILTERS);
    document.body.appendChild(this.wrapper);
  }

  async getFilterInitialization() {
    try {
      const newsObj = await NewsApp.getInitialization();
      const filters = {};

      TYPE_FILTER.forEach(filter => filters[filter] = [...new Set(newsObj.map(news => news[filter]))]);
      store.changeState(FILTERS_FIELD, filters);
      this.createFilters();
    } catch (e) {
      console.log(e);
    }
  }

  createFilters() {
    const state = store.getState();
    const wrapperNonSourcesFilters = Wrapper.createWrapper(DIV_ELEMENT, CLASS_NON_SOURCES_WRAPPER);
    const filter = new Filter();
    const input = new Input();

    for (const fild in state.filters) {    
      if (fild === TYPE_FILTER[0]) {
        const wrapperSourcesFilters = Wrapper.createWrapper(DIV_ELEMENT, CLASS_SOURCES_WRAPPER);
        const buttonSourcesFilters = Button.createButton(TEXT_GET_NEWS, CLASS_SOURCES_BUTTON, ATTRIBUTE_SOURCES); 

        wrapperSourcesFilters.appendChild(filter.createFilter(fild, state.filters[fild]));    
        wrapperSourcesFilters.appendChild(buttonSourcesFilters);
        this.wrapper.appendChild(wrapperSourcesFilters);
      } else {
        wrapperNonSourcesFilters.appendChild(filter.createFilter(fild, state.filters[fild]));
      }
    }
    const wrapperInput = Wrapper.createWrapper(DIV_ELEMENT, CLASS_INPUT_WRAPPER);

    wrapperNonSourcesFilters.appendChild(Button.createButton(TEXT_GET_NEWS, CLASS_NON_SOURCES_BUTTON, ATTRIBUTE_NON_SOURCES));
    wrapperInput.appendChild(input.createInput(CLASS_INPUT_QUERY));
    wrapperInput.appendChild(Button.createButton(TEXT_GET_NEWS, CLASS_QUERY_BUTTON, ATTRIBUTE_QUERY));
    this.wrapper.appendChild(wrapperInput);
    this.wrapper.appendChild(wrapperNonSourcesFilters);
  }
}
