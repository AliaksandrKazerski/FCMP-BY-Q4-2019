let instance = null;

export default class Store {
  constructor (state = {}) {

    if (!instance) {
      instance = this;
    }

    this.state = state;

    return instance;
  }

  getState() {
    return this.state;
  }

  changeState(fild, information) {
    this.state[fild] = information;
  }
}
