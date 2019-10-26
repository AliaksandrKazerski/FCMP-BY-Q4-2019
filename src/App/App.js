import { URL, API_KEY } from './constants'
 
export default class App {
	
	async getNews(query) {
		console.log(`${URL}${query}${API_KEY}`);
		const response = await fetch(`${URL}${query}${API_KEY}`);
		const data = await response.json();
		console.log(data.sources);
	}
}