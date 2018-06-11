/**
 * Created by Murat on 10.06.2018.
 */
import Render from './render';
import Room from './room';
import Fight from './fight';

import { loadHero } from './backend';

export default class Inventory extends Render {
  constructor(gameData, status) {
    super();
    this.gameData = gameData;
    this.gamestatus = status;
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    this.closeInventory = this.element.querySelector('.inventory__close');
    this.addEventListeners();
    this.appendToTree();
    console.log('Inventory');
  }

  getHtmlString() {
    return `  
      <div class="inventory">
        <button class="inventory__close">X</button>
        <h2 class="inventory__title">Inventory</h2>
        <div class="inventory__left">
          <p class="inventory__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ab accusantium consequatur, dicta doloremque, explicabo fuga in itaque
            molestiae nobis quas quasi, quia quibusdam rem sequi similique sint vel.
            Alias consectetur corporis cupiditate eum excepturi expedita, fuga
            ipsum iste, nam porro, ut voluptatibus? Assumenda aut eius nemo nisi
            quod sequi vel.
          </p>
          <div class="inventory__buttons">
            <button class="inventory__btn">Drop</button>
            <button class="inventory__btn">Take</button>
          </div>
        </div>
        <div class="inventory__right">
          <ul class="inventory__list">
            <li class="inventory__item">inventory-1</li>
            <li class="inventory__item">inventory-2</li>
            <li class="inventory__item">inventory-3</li>
            <li class="inventory__item">inventory-4</li>
            <li class="inventory__item">inventory-5</li>
            <li class="inventory__item">inventory-6</li>
            <li class="inventory__item">inventory-7</li>
            <li class="inventory__item">inventory-8</li>
            <li class="inventory__item">inventory-9</li>
            <li class="inventory__item">inventory-10</li>
          </ul>
        </div>
        <div class="inventory__information">
          max elements: 10
        </div>
      </div>`;
  }

  clickCloseInventoryHandler() {
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
    this.clickCloseInventoryHandler = this.clickCloseInventoryHandler.bind(this);
    this.closeInventory.addEventListener('click', this.clickCloseInventoryHandler);
  }
}
