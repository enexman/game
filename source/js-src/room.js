/**
 * Created by Murat on 08.06.2018.
 */
import Render from './render';
import Inventory from './inventory';
import Fight from './fight';
import Modal from './modal';
import { moveHero } from './backend';

export default class Room extends Render {
  constructor(gameData) {
    super();
    this.gameData = gameData;
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    this.navigation = this.element.querySelector('.navigation');
    this.linkInventory = this.element.querySelector('.hero__link');
    this.addEventListeners();
    this.appendToTree();
    console.log('Room');
  }

  getHtmlString() {
    const navigation = this.gameData.room.navigation.map((it) => {
      let text =``;
      switch (it) {
        case `left` : text = `Go to the left`;
          break;
        case `forward` : text = `Go forward`;
          break;
        case `run` : text = `Run without looking back`;
          break;
        case `fight` : text = `Take the fight`;
          break;
        case `right` : text = `Go to the right`;
          break;
      }
      return `
        <div class="navigation__group">
          <input type="radio" id="${it}" name="navigation" value="${it}">
          <label for="${it}" class="navigation__label">${text}</label>
        </div>`
    }).join(``);
    return `  
      <div class="room">
        <div class="room__stat  stat">
          <div class="stat__level">Level: <span class="stat__level-num">${this.gameData.level}</span></div>
          <div class="stat__move">Move: <span class="stat__move-num">${this.gameData.move}</span></div>
        </div>
        <div class="stat__line"></div>
        <p class="stat__event">${this.gameData.room.event}</p>
        <form class="room__navigation  navigation">
          ${navigation}
        </form>
        <div class="room__hero  hero">
          <div class="hero__wrap">
            <p class="hero__race">Race: <span>${this.gameData.race}</span></p>
            <p class="hero__class">Class: <span>${this.gameData.class}</span></p>
          </div>
          <div class="hero__wrap">
            <ul class="hero__skills">
              <li class="hero__skill">Name: <span>${this.gameData.name}</span></li>
              <li class="hero__skill">Level: <span>${this.gameData.level}</span></li>
              <li class="hero__skill">Strength: <span>${this.gameData.strength}</span></li>
              <li class="hero__skill">Agility: <span>${this.gameData.agility}</span></li>
              <li class="hero__skill">Luck: <span>${this.gameData.luck}</span></li>
            </ul>
            <ul class="hero__inventory">
              <li class="hero__weapon hero__weapon--head">Head: <span>${this.gameData.weapons.head}</span></li>
              <li class="hero__weapon hero__weapon--body">Body: <span>${this.gameData.weapons.head}</span></li>
              <li class="hero__weapon hero__weapon--hand">Right hand: <span>${this.gameData.weapons.head}</span></li>
              <li class="hero__weapon hero__weapon--hand">Left hand: <span>${this.gameData.weapons.head}</span></li>
              <li class="hero__weapon hero__weapon--feet">Feet: <span>${this.gameData.weapons.head}</span></li>
            </ul>
            <a href="#" class="hero__link">
              <img src="http://placehold.it/150x100" alt="hero image" class="hero__image">
            </a>
          </div>
          <ul class="hero__impacts">
            <li class="hero__negative" title="Negative"></li>
            <li class="hero__positive" title="Positive"></li>
            <li class="hero__positive" title="Positive"></li>
            <li class="hero__positive" title="Positive"></li>
          </ul>
        </div>
      </div>`;
  }

  go () {
    console.log('this.gameData', this.gameData);
    moveHero(
      (res) => {
        console.log('onSuccess', res);
        new Room(res);
      },
      (res) => console.log('onError', res),
      this.gameData
    );
  }

  fight () {
    new Fight(this.gameData);
  }

  run () {
    new Modal();
  }
  clickNavigationHandler(evt) {
    switch (evt.target.value) {
      case `left` : this.go();
        break;
      case `forward` : this.go();
        break;
      case `right` : this.go();
        break;
      case `run` : this.run();
        break;
      case `fight` : this.fight(this.gameData);
        break;
    }
  }

  clickLinkInventoryHandler(evt) {
    evt.preventDefault();
    new Inventory(this.gameData, `room`);
  }
  addEventListeners() {
    this.clickNavigationHandler = this.clickNavigationHandler.bind(this);
    this.navigation.addEventListener('click', this.clickNavigationHandler);

    this.clickLinkInventoryHandler = this.clickLinkInventoryHandler.bind(this);
    this.linkInventory.addEventListener('click', this.clickLinkInventoryHandler);
  }
}
