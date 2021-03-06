import Store from '../Store/Store';
import NewsApp from '../NewsApp/NewsApp';
import renderError from '../utils/render/render-error';

import {
  ZERO_POSITION, 
  FIRST_POSITION, 
  JOIN_STRING,
  CATEGORY_SOURCES,
  CATEGORY_QUERY,
  ERROR_MESSAGE_CHOOSE,
  ERROR_MESSAGE_ENTER,
} from './constants';

const store = new Store;

export default class QueryCreator {

  static createNewQuery(e) {
    const state = store.getState();
    
    if (e.target.dataset.category === CATEGORY_SOURCES) {
      if (!state.sources) {
        renderError(ERROR_MESSAGE_CHOOSE);
      } else {
        NewsApp.getNews(`sources=${state.sources}`);
      }
    } else if (e.target.dataset.category === CATEGORY_QUERY){
      if (!state.query) {
        renderError(ERROR_MESSAGE_ENTER);
      } else {
        NewsApp.getNews(`q=${state.query}`);
      }
    } else {
      if (!state.activeFilters) {
        renderError(ERROR_MESSAGE_CHOOSE);
      } else {
        const categoryNames = Object.entries(state.activeFilters)
      .map((entry) => {
        if (entry[FIRST_POSITION].length > ZERO_POSITION) {
          return entry[ZERO_POSITION];
        }
      })
      .filter(entry => entry !== undefined);

      const filtersNames = Object.entries(state.activeFilters)
        .map((entry) => {
          if (entry[FIRST_POSITION].length > ZERO_POSITION) {
            return entry[FIRST_POSITION];
          }
        })
        .filter(entry => entry !== undefined);

      NewsApp.getNews(categoryNames
        .map((name, pos) => {
          return `${name}=${filtersNames[pos]}`
        })
        .join(JOIN_STRING)
      );
      }
    } 
  }
}
