export default class Wrapper {
  static createWrapper(tag, className) {
    const element = document.createElement(tag);

    if (className) {
      element.classList.add(className);
    }

    return element;
  }
}
