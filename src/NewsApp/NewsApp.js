import NewsCreator from '../NewsCreator/NewsCreator';
import ErrorMessage from '../Components/ErrorMessage';
import {URL, API_KEY, ENDPOINTS} from './constants';

export default class NewsApp {
  constructor(newsCreator) {
    this.newsCreator = newsCreator;
  }

  static async getInitialization() {
    try {
      const response = await fetch(`${URL}${ENDPOINTS.SOURCES}${API_KEY}`);
      const data = await response.json();
      return data.sources;
    } catch (e) {
      const errorMessage = new ErrorMessage();
      errorMessage.createError(e.message);
    }
  }

  static async getNews( query = '') {
    const endpoint = ENDPOINTS.TOP_HEADLINES;
    try {
      const response = await fetch(`${URL}${endpoint}${query}${API_KEY}`);
      const data = await response.json();
      const newsCreator = new NewsCreator();

      newsCreator.deleteNews();
      newsCreator.createNews(data.articles);
    } catch (e) {
      const errorMessage = new ErrorMessage();
      errorMessage.createError(e.message);
    }
  }
}
