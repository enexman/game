/**
 * Created by Murat on 08.06.2018.
 */
import Render from './render';

export default class Main extends Render {
  constructor() {
    super();
    this.htmlString = this.getHtmlString();
    this.element = this.createElement(this.htmlString);
    this.enterGameBtn = this.element.querySelector('h1');
    this.addEventListeners();
    this.appendToTree();
    console.log('Main');
  }

  getHtmlString() {
    return `  
      <div class="main">
        <h1>Главный экран игры</h1>
      </div>`;
  }
  clickStartGameBtnHandler() {

  }
  addEventListeners() {
    this.clickStartGameBtnHandler = this.clickStartGameBtnHandler.bind(this);
    this.enterGameBtn.addEventListener('click', this.clickStartGameBtnHandler);
  }
  removeEventListeners() {}
}
