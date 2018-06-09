/**
 * Created by Murat on 08.06.2018.
 */
import Render from './render';

export default class Main extends Render {
  constructor(gameData) {
    super();
    this.gameData = gameData;
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    this.navigation = this.element.querySelector('.navigation');
    this.addEventListeners();
    this.appendToTree();
    console.log('Room');
  }

  getHtmlString() {
    const navigation = this.gameData.room.navigation.map((it) => {
      let text =``;
      switch (it) {
        case `left` : text = `Пойти на лево`;
          break;
        case `forward` : text = `Идти прямо`;
          break;
        case `run` : text = `Бежать без оглядки`;
          break;
        case `fight` : text = `Принять бой`;
          break;
        case `right` : text = `Пойти на право`;
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
            <ul class="hero__skills">
              <li class="hero__skill">Name: <span>${this.gameData.name}</span></li>
              <li class="hero__skill">Level: <span>${this.gameData.level}</span></li>
              <li class="hero__skill">Strength: <span>${this.gameData.strength}</span></li>
              <li class="hero__skill">Agility: <span>${this.gameData.agility}</span></li>
              <li class="hero__skill">Luck: <span>${this.gameData.luck}</span></li>
            </ul>
            <ul class="hero__inventory">
              <li class="hero__weapon hero__weapon--head">Голова: <span>${this.gameData.weapons.head}</span></li>
              <li class="hero__weapon hero__weapon--body">Тело: <span>${this.gameData.weapons.head}</span></li>
              <li class="hero__weapon hero__weapon--hand">Правая рука: <span>${this.gameData.weapons.head}</span></li>
              <li class="hero__weapon hero__weapon--hand">Левая рука: <span>${this.gameData.weapons.head}</span></li>
              <li class="hero__weapon hero__weapon--feet">Ноги: <span>${this.gameData.weapons.head}</span></li>
            </ul>
            <a href="#" class="hero__link">
              <img src="img/hero.jpg" alt="hero image" class="hero__image">
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

  clickNavigationHandler(evt) {
    switch (evt.target.value) {
      case `left` : console.log(`Пойти на лево`);
        break;
      case `forward` : console.log(`Идти прямо`);
        break;
      case `run` : console.log(`Бежать без оглядки`);
        break;
      case `fight` : console.log(`Принять бой`);
        break;
      case `right` : console.log(`Пойти на право`);
        break;
    }
  }
  addEventListeners() {
    this.clickNavigationHandler = this.clickNavigationHandler.bind(this);
    this.navigation.addEventListener('click', this.clickNavigationHandler);
  }
}
