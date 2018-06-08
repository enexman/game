/**
 * Created by Murat on 07.06.2018.
 */
import Render from './render';
import Main from './main';
import { createUserUid } from './backend';

export default class GameStart extends Render {
  constructor() {
    super();
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    this.form = this.element.querySelector('.game-start');
    this.gameInput = this.element.querySelector('.game-start__input');
    this.startGameBtn = this.element.querySelector('.game-start__submit');
    this.addEventListeners();
    this.appendToTree();
    console.log('GameStart');
  }

  getHtmlString() {
    return `  
      <form class="game-start" autocomplete="off">
        <label for="name">Имя героя:</label>
        <input class="game-start__input" id="name" type="text">
        <button class="game-start__submit" type="submit">Пуск</button>
      </form>`;
  }
  changeGameInputHandler() {
  }
  clickGameStartBtnHandler(evt) {
    evt.preventDefault();
    const uid = this.gameInput.value + Date.now();
    localStorage.setItem(`uid`, JSON.stringify(uid.toLowerCase()));
    console.log('clickGameStartBtnHandler', uid);
    createUserUid(
      (res) => console.log('onSuccess', res),
      (res) => console.log('onError', res),
      uid
    );
    new Main();
  }
  addEventListeners() {
    this.changeGameInputHandler = this.changeGameInputHandler.bind(this);
    this.gameInput.addEventListener('click', this.changeGameInputHandler);

    this.clickGameStartBtnHandler = this.clickGameStartBtnHandler.bind(this);
    this.startGameBtn.addEventListener('click', this.clickGameStartBtnHandler);
  }
  removeEventListeners() {}
}
