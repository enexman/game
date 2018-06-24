/**
 * Created by Murat on 10.06.2018.
 */
import Render from './render';
import Room from './room';
import Fight from './fight';

import { loadHero } from './backend';

export default class Inventory extends Render {
  constructor(gameData, status, descriptionId) {
    super();
    this.gameData = gameData;
    this.gamestatus = status;
    this.descriptionId = descriptionId;
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    this.closeBtn = this.element.querySelector('.inventory__close');
    this.list = this.element.querySelector('.inventory__list');
    this.dropBtn = this.element.querySelector('.inventory__btn--drop');
    this.addEventListeners();
    this.appendToTree();
    console.log('Inventory');
  }

  getHtmlString() {
    const weapon =  !(this.gamestatus === `fight`);
    const inventory = this.gameData.inventory.map((it) => {
      return `
        <li class="inventory__item" data-key="${it.id}">${it.name}</li>`
    }).join(``);
    const description = (idx) => {
      const id = (idx) ? idx : null;
      const data = this.gameData.inventory.filter((it) => it.id === id)[0];
      return `
        <div class="inventory__left">
          <p class="inventory__description">
            ${(data) ? data.description : ``}
          </p>
          <div class="inventory__buttons">
            <button class="inventory__btn  inventory__btn--drop ${id ? `` : `invisible`}">Drop</button>
            <button class="inventory__btn  ${id && weapon ? `` : `invisible`}">Take</button>
          </div>
        </div>`
    };

    return `  
      <div class="inventory">
        <button class="inventory__close">X</button>
        <h2 class="inventory__title">Inventory</h2>
        ${description(this.descriptionId)}
        <div class="inventory__right">
          <ul class="inventory__list">
            ${inventory}
          </ul>
        </div>
        <div class="inventory__information">
          max elements: 10
        </div>
      </div>`;
  }

  clickListHandler(evt) {
    new Inventory(this.gameData, this.gamestatus, evt.target.dataset.key);
  }

  clickDropBtnHandler() {
    console.log('Drop')
    this.gameData.inventory = this.gameData.inventory.filter((it) => it.id !== this.descriptionId);
    new Inventory(this.gameData, this.gamestatus);
  }

  clickCloseHandler() {
    loadHero(
      (res) => {
        console.log('onSuccess', res);
        if (this.gamestatus === `fight`) {
          new Fight(this.gameData);
          return;
        }
        new Room(res);
      },
      (res) => console.log('onError', res),
      this.gameData.uid
    );
  }

  addEventListeners() {
    this.clickCloseHandler = this.clickCloseHandler.bind(this);
    this.closeBtn.addEventListener('click', this.clickCloseHandler);

    this.clickListHandler = this.clickListHandler.bind(this);
    this.list.addEventListener('click', this.clickListHandler);

    this.clickDropBtnHandler = this.clickDropBtnHandler.bind(this);
    this.dropBtn.addEventListener('click', this.clickDropBtnHandler);
  }
}
