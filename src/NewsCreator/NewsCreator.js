import { DIV, BLOCK_CLASS_NAME, NEWS_CLASS_NAME } from './constants';

export default class NewsCreator {
  constructor() {
    this.div = null;
  }

  createNews(newsObject) {
    if (this.div) {
      this.div.remove();
    }
    this.div = document.createElement(DIV);
    this.div.classList.add(BLOCK_CLASS_NAME);
    newsObject.forEach(news => this.createNewsElement(news));
    document.body.appendChild(this.div);
  }

  createNewsElement(news) {
    const newsElement = document.createElement(DIV);
    newsElement.classList.add(NEWS_CLASS_NAME);
    for (const key in news) {
      const newsElementField = document.createElement(DIV);
      newsElementField.classList.add(key);
      newsElementField.innerText = news[key];
      newsElement.appendChild(newsElementField);
    }
    this.div.appendChild(newsElement);
  }

  deleteNews() {
    this.div.remove();
  }
}