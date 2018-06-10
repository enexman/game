/**
 * Created by Murat on 10.06.2018.
 */
import Render from './render';

export default class Modal extends Render {
  constructor() {
    super();
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    // this.form = this.element.querySelector('.game-start');
    this.addEventListeners();
    this.appendToTree();
    console.log('Modal');
  }

  getHtmlString() {
    return `  
      <div class="modal">
        <div class="modal__wrap">
          <p class="modal__message">Сообщение</p>
          <button class="modal__btn">Ок</button>
        </div>
      </div>`;
  }

  appendToTree(container = document.body) {
    container.appendChild(this.element);
  }
  clickGameStartBtnHandler() {
  }
  addEventListeners() {
    // this.clickGameStartBtnHandler = this.clickGameStartBtnHandler.bind(this);
    // this.startGameBtn.addEventListener('click', this.clickGameStartBtnHandler);
  }
}
