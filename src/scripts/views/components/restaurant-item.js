/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div>
            <div class="item-photo">
              <img src="${CONFIG.BASE_IMG_URL}/medium/${this._data.pictureId}"
                alt="${this._data.name}">
            </div>
            <a class="link-detail" href="#/detail/${this._data.id}"><i class="fas fa-search"></i></a>
            <div class="item-description" style="padding: 1rem;">
              <div class="info-group">
                <p><i class="fas fa-map-marker-alt"></i> ${this._data.city}</p>
                <p><i class="fas fa-star"></i> ${this._data.rating}</p>
              </div>
              <p class="restaurant-title mt-2">${this._data.name}</p>
              <p class="description mt-2 pb-4">${this._data.description.substr(0, 100)}....</p>
      
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
