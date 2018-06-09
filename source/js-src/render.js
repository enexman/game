/**
 * Created by Murat on 07.06.2018.
 */

export default class Render {
  createElement(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content;
  }
  appendToTree(container = document.body) {
    container.innerHTML = ``;
    container.appendChild(this.element);
  }
  getElement() {
    return this.element;
  }
}
