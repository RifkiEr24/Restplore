/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */


import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './components/navbar';
import './components/footer';
import './components/restaurant-item';
import DrawerInitiator from '../utils/drawer-initiator';
class App {
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
