/**
 * Created by Murat on 10.06.2018.
 */
import Render from './render';

export default class Modal extends Render {
  constructor(gameData) {
    super();
    this.gameData = gameData;
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    this.okBtn = this.element.querySelector('.modal__btn');
    this.addEventListeners();
    this.appendToTree();
    console.log('Modal');
  }

  getHtmlString() {
    return `  
      <div class="modal">
        <div class="modal__wrap">
          <p class="modal__message">${this.gameData.room.message}</p>
          <button class="modal__btn">Ok</button>
        </div>
      </div>`;
  }

  appendToTree(container = document.body) {
    container.appendChild(this.element);
  }
  clickOkBtnHandler() {
    document.querySelector('.modal').remove();
  }
  addEventListeners() {
    this.clickOkBtnHandler = this.clickOkBtnHandler.bind(this);
    this.okBtn.addEventListener('click', this.clickOkBtnHandler);
  }
}
