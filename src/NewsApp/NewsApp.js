import NewsCreator from '../NewsCreator/NewsCreator';
import renderError from '../utils/render/render-error';

import requestPreparation from '../utils/request-utils/request-preparation';

import {URL, API_KEY, ENDPOINTS, REQUEST_GET} from './constants';

const newsCreator = new NewsCreator();

export default class NewsApp {

  static async getInitialization() {
    try {
      const data = await requestPreparation(REQUEST_GET, `${URL}${ENDPOINTS.SOURCES}${API_KEY}`);

      return data.sources;
    } catch (e) {
      renderError(e.message);
    }
  }

  static async getNews(query = '') {
    const endpoint = ENDPOINTS.TOP_HEADLINES;
    try {
      const data = await requestPreparation(REQUEST_GET, `${URL}${endpoint}${query}${API_KEY}`);

      newsCreator.createNews(data.articles);
    } catch (e) {
      renderError(e.message);
    }
  }
}
