import { URL, API_KEY } from './constants'
 
export default class NewsApp {
	constructor(newsCreator) {
		this.newsCreator = newsCreator;
	}
	
	async getNews(endpoint, query = '') {
	  console.log(`${URL}${endpoint}${query}${API_KEY}`);
		try {
			const response = await fetch(`${URL}${endpoint}${query}${API_KEY}`);
			const data = await response.json();
			console.log(data);
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
