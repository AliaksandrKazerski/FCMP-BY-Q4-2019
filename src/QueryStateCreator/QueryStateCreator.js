import { ZERO_POSITION, FIRST_POSITION, JOIN_STRING} from './constants';

export default class QueryStateCreator {
  constructor(app, newsCreator, config = {}) {
    this.app = app;
    this.newsCreator = newsCreator;
    this.config = config;
    this.changeQuery = this.changeQuery.bind(this);
  }

  changeQuery(e) {
    const category = e.target.dataset.category;
    this.changeConfig(e);
    if (this.config[category].length === 0) {
      this.newsCreator.deleteNews();
    } else {
      this.app.getNews(this.createNewQuery());
    }
  }

  changeConfig(e) {
    const category = e.target.dataset.category;
    
    if (!this.config[category]) {
      this.config[category] = [];
    }
    if (this.config[category].length > 0) {
      if (this.config[category][0] === e.target.innerText) {
        this.config[category].pop();
      } else {
        this.config[category].pop();
        this.config[category].push(e.target.innerText);
      }
    } else {
      this.config[category].push(e.target.innerText);
    }
  }

  createNewQuery() {
    const categoryNames = Object.entries(this.config)
      .map((entry) => {
        if (entry[1].length > 0) {
          return entry[0];
        }
      })
      .filter(entry => entry !== undefined);

    const filtersNames = Object.entries(this.config)
      .map((entry) => {
        if (entry[1].length > 0) {
          return entry[1];
        }
      })
      .filter(entry => entry !== undefined);

    return `${filtersNames
      .map((names, pos) => {
        return names.map(name => `${categoryNames[pos]}=${name}`)
      })
      .flat(1)
      .join('&')}&`
  }
}