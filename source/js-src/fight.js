/**
 * Created by Murat on 10.06.2018.
 */
import Render from './render';
import Inventory from './inventory';

export default class Fight extends Render {
  constructor(gameData) {
    super();
    this.gameData = gameData;
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    this.linkInventory = this.element.querySelector('.hero__link');
    this.addEventListeners();
    // this.form = this.element.querySelector('.game-start');
    this.appendToTree();
    console.log('Fight');
  }

  getHtmlString() {
    return `  
      <div class="fight">
        <div class="fight__monster  monster">
          <a href="#" class="monster__link">
            <img src="http://placehold.it/150x100" alt="monster image" class="monster__image">
            <div class="monster__description">
              <p class="monster__text">
                <span>Characteristic: </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias aliquid dolorum error exercitationem facilis iure odit
                Alias aliquid dolorum error exercitationem facilis iure odit
              </p>
            </div>
          </a>
          <div class="monster__wrap">
            <h2 class="monster__name">Dragon <span>10 level</span></h2>
            <p class="monster__text">
              <span>Indecency: </span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
              commodi corporis id provident rem saepe sed suscipit tempore voluptas.
              Alias aliquid dolorum error exercitationem facilis iure odit
            </p>
          </div>
        </div>
        <div class="fight__battle  battle">
          <p class="battle__message">Success</p>
          <div class="battle__wrap">
            <p class="battle__warrior">Hero</p>
            <div class="battle__progress"></div>
            <p class="battle__warrior">Dragon</p>
          </div>
          <button class="battle__attack">Attack</button>
        </div>
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

  clickLinkInventoryHandler(evt) {
    evt.preventDefault();
    new Inventory(this.gameData, `fight`);
  }
  addEventListeners() {
    this.clickLinkInventoryHandler = this.clickLinkInventoryHandler.bind(this);
    this.linkInventory.addEventListener('click', this.clickLinkInventoryHandler);
  }
}
