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
              <img class="lazyload" data-src="${CONFIG.BASE_IMG_URL}/small/${this._data.pictureId}"
                alt="${this._data.name}">
            </div>
            <a class="link-detail"  aria-label="${this._data.name}Detail" href="#/detail/${this._data.id}">
            <svg class="icon search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
            </a>
            <div class="item-description" style="padding: 1rem;">
              <div class="info-group">
                <p><svg class="icon small-icon inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
               ${this._data.city}</p>
                <p><svg class="icon small-icon inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg> ${this._data.rating}</p>
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
