import {URL, API_KEY, ENDPOINTS, TYPE_FILTER} from './constants'

export default class NewsApp {
  constructor(newsCreator) {
    this.newsCreator = newsCreator;
  }

  async getNews(typeFilter, query = '') {
    let endpoint;
    if (typeFilter === TYPE_FILTER.NEWS) {
      endpoint = ENDPOINTS.TOP_HEADLINES;
    } else if (typeFilter === TYPE_FILTER.SOURCES) {
      endpoint = ENDPOINTS.SOURCES;
    }
    try {
      const response = await fetch(`${URL}${endpoint}${query}${API_KEY}`);
      const data = await response.json();
      if (query) {
        this.newsCreator.createNews(data.sources || data.articles);
      } else {
        return data.sources;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
