/**
 * Created by Murat on 07.06.2018.
 */
import Render from './render';
import GameStart from './game-start';
import Room from './room';
import { loadHero } from './backend';

export default class GameCreate extends Render {
  constructor() {
    super();
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    this.enterGameBtn = this.element.querySelector('.game-create__btn--start-game');
    this.newGameBtn = this.element.querySelector('.game-create__btn--new-game');
    this.addEventListeners();
    this.appendToTree();
    console.log('GameCreate');
  }

  getHtmlString() {
    return `  
      <div class="game-create">
        <button class="game-create__btn  game-create__btn--start-game">Enter the game</button>
        <button class="game-create__btn  game-create__btn--new-game">New game</button>
      </div>`;
  }
  clickStartGameBtnHandler() {
    const uid = JSON.parse(localStorage.getItem(`uid`));
    console.log('uid', uid);
    if(uid) {
      loadHero(
        (res) => {
          console.log('onSuccess', res);
          new Room(res);
        },
        (res) => console.log('onError', res),
        uid
      );
      return;
    }
    new GameStart();
  }
  clickNewGameBtnHandler() {
    new GameStart();
  }
  addEventListeners() {
    this.clickStartGameBtnHandler = this.clickStartGameBtnHandler.bind(this);
    this.enterGameBtn.addEventListener('click', this.clickStartGameBtnHandler);

    this.clickNewGameBtnHandler = this.clickNewGameBtnHandler.bind(this);
    this.newGameBtn.addEventListener('click', this.clickNewGameBtnHandler);
  }
}
