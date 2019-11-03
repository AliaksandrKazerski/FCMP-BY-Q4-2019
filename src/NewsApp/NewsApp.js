import NewsCreator from '../NewsCreator/NewsCreator';
import ErrorMessage from '../Components/ErrorMessage';
import RequestFactory from '../RequestFactory/RequestFactory';

import {URL, API_KEY, ENDPOINTS} from './constants';

const errorMessage = new ErrorMessage();
const requestFactory = new RequestFactory();
const newsCreator = new NewsCreator();

export default class NewsApp {

  static async getInitialization() {
    try {
      const response = await requestFactory.createRequest('GET', `${URL}${ENDPOINTS.SOURCES}${API_KEY}`);
      const data = await response.json();
      return data.sources;
    } catch (e) {
      errorMessage.createError(e.message);
    }
  }

  static async getNews( query = '') {
    const endpoint = ENDPOINTS.TOP_HEADLINES;
    try {
      const response = await requestFactory.createRequest('GET', `${URL}${endpoint}${query}${API_KEY}`);
      const data = await response.json();

      newsCreator.deleteNews();
      newsCreator.createNews(data.articles);
    } catch (e) {
      errorMessage.createError(e.message);
    }
  }
}
