export default class FilterCreator {
  constructor (state) {
    this.state = state;
    this.elements = [];
    this.ul = null;
  }
  
  createFilters(filters, category, filterClass) {
    this.ul = document.createElement('ul');
    this.ul.classList.add(filterClass);
    filters
      .map(filter => this.createFilter(filter, category))
      .forEach(element => this.ul.appendChild(element));
    document.body.appendChild(this.ul); 
  }

  createFilter(filter, category) {
    const element = document.createElement('li');
    element.innerText = filter;
    element.setAttribute('data-category', category);
    element.addEventListener('click', this.state.changeQuery);
    this.elements.push(element);
    return element;
  }

  removeFilters() {
    debugger;
    this.elements.forEach(element => element.removeEventListener('onclick', this.state.changeQuery));
    this.ul.remove();
  }
}