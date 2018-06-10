/**
 * Created by Murat on 10.06.2018.
 */
import Render from './render';

export default class Fight extends Render {
  constructor() {
    super();
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
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
                <span>Описание: </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias aliquid dolorum error exercitationem facilis iure odit
                Alias aliquid dolorum error exercitationem facilis iure odit
              </p>
            </div>
          </a>
          <div class="monster__wrap">
            <h2 class="monster__name">Dragon <span>10 level</span></h2>
            <p class="monster__text">
              <span>Непотребство: </span>
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
        <div class="fight__hero  hero">
          <div class="hero__wrap">
            <p class="hero__race">Race: <span>Human</span></p>
            <p class="hero__class">Class: <span>no class</span></p>
          </div>
          <div class="hero__wrap">
            <ul class="hero__skills">
              <li class="hero__skill">Name: <span>Hero</span></li>
              <li class="hero__skill">Level: <span>1</span></li>
              <li class="hero__skill">Strength: <span>1</span></li>
              <li class="hero__skill">Agility: <span>1</span></li>
              <li class="hero__skill">Luck: <span>1</span></li>
            </ul>
            <ul class="hero__inventory">
              <li class="hero__weapon hero__weapon--head">Шлем: <span>5</span></li>
              <li class="hero__weapon hero__weapon--body">Доспехи: <span>5</span></li>
              <li class="hero__weapon hero__weapon--hand">Мечь смертоносный: <span>5</span></li>
              <li class="hero__weapon hero__weapon--hand">Щит: <span>5</span></li>
              <li class="hero__weapon hero__weapon--feet">Сапожки: <span>5</span></li>
            </ul>
            <a href="#" class="hero__link">
              <img src="http://placehold.it/150x100" alt="hero image" class="hero__image">
            </a>
          </div>
          <ul class="hero__impacts">
            <li class="hero__negative" title="Негативное"></li>
            <li class="hero__positive" title="Позитивное"></li>
            <li class="hero__positive" title="Позитивное"></li>
            <li class="hero__positive" title="Позитивное"></li>
          </ul>
        </div>
      </div>`;
  }

  clickGameStartBtnHandler() {
  }
  addEventListeners() {
    // this.clickGameStartBtnHandler = this.clickGameStartBtnHandler.bind(this);
    // this.startGameBtn.addEventListener('click', this.clickGameStartBtnHandler);
  }
}
