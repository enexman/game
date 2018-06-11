/**
 * Created by Murat on 07.06.2018.
 */
import Render from './render';
import Room from './room';
import { createHero } from './backend';

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
    this.gameInput.focus();
    console.log('GameStart');
  }

  getHtmlString() {
    return `  
      <form class="game-start" autocomplete="off">
        <label for="name">Name of hero:</label>
        <input class="game-start__input" id="name" type="text">
        <button class="game-start__submit" type="submit">Start</button>
      </form>`;
  }

  clickGameStartBtnHandler(evt) {
    evt.preventDefault();
    const uid = this.gameInput.value.toLowerCase() + Date.now();
    localStorage.setItem(`uid`, JSON.stringify(uid));
    createHero(
      (res) => {
        console.log('onSuccess', res);
        new Room(res);
      },
      (res) => console.log('onError', res),
      uid
    );
  }
  addEventListeners() {
    this.clickGameStartBtnHandler = this.clickGameStartBtnHandler.bind(this);
    this.startGameBtn.addEventListener('click', this.clickGameStartBtnHandler);
  }
}
