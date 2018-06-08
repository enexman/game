/**
 * Created by Murat on 07.06.2018.
 */

export default class Render {
  createElement(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content;
  }
  appendToTree() {
    document.body.innerHTML = ``;
    document.body.appendChild(this.element);
  }
  getElement() {
    return this.element;
  }
}
