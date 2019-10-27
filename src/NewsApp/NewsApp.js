import { URL, API_KEY } from './constants'
 
export default class NewsApp {
	constructor(newsCreator) {
		this.newsCreator = newsCreator;
	}
	
	async getNews(query = '') {
		try {
			const response = await fetch(`${URL}${query}${API_KEY}`);
			const data = await response.json();
			if (query) {
				this.newsCreator.createNews(data.sources);
			} else {
				return data.sources;
			}
		} catch (e) {
			console.log(e);
		}
	}
}
