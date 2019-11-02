import Store from '../Store/Store';
import NewsApp from '../NewsApp/NewsApp';

import {ZERO_POSITION, FIRST_POSITION, JOIN_STRING} from './constants';

const store = new Store;

export default class Creator {

  static createNewQuery(e) {
    const state = store.getState();
    
    if (e.target.innerText === 'get news') {
      NewsApp.getNews(`sources=${state.sources}`);
    } else {
      if (!state.activeFilters) {
        state.activeFilters = {};
      }
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
