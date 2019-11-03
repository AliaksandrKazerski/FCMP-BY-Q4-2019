import Store from '../Store/Store';
import NewsApp from '../NewsApp/NewsApp';
import ErrorMessage from '../Components/ErrorMessage';

import {ZERO_POSITION, FIRST_POSITION, JOIN_STRING} from './constants';

const store = new Store;
const errorMessage = new ErrorMessage();

export default class QueryCreator {

  static createNewQuery(e) {
    const state = store.getState();
    
    if (e.target.dataset.category === 'sources') {
      if (!state.sources) {
        errorMessage.createError('please choose one of the options');
      } else {
        NewsApp.getNews(`sources=${state.sources}`);
      }
    } else if (e.target.dataset.category === 'query'){
      if (!state.query) {
        errorMessage.createError('please enter you request');
      } else {
        NewsApp.getNews(`q=${state.query}`);
      }
    } else {
      if (!state.activeFilters) {
        errorMessage.createError('please choose one of the options');
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
