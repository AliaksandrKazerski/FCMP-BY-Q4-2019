import { ZERO_POSITION, FIRST_POSITION, JOIN_STRING, ZERO_COUNT} from './constants';

export default class QueryStateCreator {
  constructor(app, newsCreator, config = {}) {
    this.app = app;
    this.newsCreator = newsCreator;
    this.config = config;
    this.endpoint = null;

    this.changeQuery = this.changeQuery.bind(this);
  }

  changeQuery(e) {
    let countFiltersFilds = ZERO_COUNT;

    this.changeConfig(e);
    for (const category in this.config) {
      countFiltersFilds += this.config[category].length;
    }
    if (!countFiltersFilds) {
      this.newsCreator.deleteNews();
    } else {
      this.app.getNews(this.endpoint, this.createNewQuery());
    } 
  }

  changeConfig(e) {
    const category = e.target.dataset.category;
    this.endpoint = e.target.dataset.endpoint;

    if (!this.config[category]) {
      this.config[category] = [];
    }
    if (this.config[category].length > ZERO_POSITION) {
      if (this.config[category][ZERO_POSITION] === e.target.innerText) {
        this.config[category].pop();
      } else {
        this.config[category].pop();
        this.config[category].push(e.target.innerText);
      }
    } else {
      this.config[category].push(e.target.innerText);
    }
    console.log(this.endpoint);
    console.log(this.config);
  }

  createNewQuery() {
    const categoryNames = Object.entries(this.config)
      .map((entry) => {
        if (entry[FIRST_POSITION].length > ZERO_POSITION) {
          return entry[ZERO_POSITION];
        }
      })
      .filter(entry => entry !== undefined);

    const filtersNames = Object.entries(this.config)
      .map((entry) => {
        if (entry[FIRST_POSITION].length > ZERO_POSITION) {
          return entry[FIRST_POSITION];
        }
      })
      .filter(entry => entry !== undefined);

    return `${filtersNames
      .map((names, pos) => {
        return names.map(name => `${categoryNames[pos]}=${name}`)
      })
      .flat(1)
      .join(JOIN_STRING)}${JOIN_STRING}`.toLowerCase();
  }
}
