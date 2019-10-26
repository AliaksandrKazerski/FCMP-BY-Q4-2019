export default class QueryState {
  constructor(app, config = {}) {
    this.app = app;
    this.config = config;
    this.changeQuery = this.changeQuery.bind(this);
  }

  changeQuery(e) {
    this.changeConfig(e);
    const query = this.createNewQuery();
    
    this.app.getNews(query);
  }

  changeConfig(e) {
    const category = e.target.dataset.category;
    this.config[category] = [];
    const position = this.config[category].indexOf(e.target.innerText)
    if (position < 0) {
      this.config[category].push(e.target.innerText);
    } else {
      this.config[category].splice(position, 1);
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