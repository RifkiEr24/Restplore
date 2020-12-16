/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <h2 class="center">Restoran Favorit Kamu</h2>
    <div class="restaurant-list p-5">
    <div class="loading">
      <p class="center mt-2 no-restaurant-liked">Tidak ada Restoran untuk ditampilkan</p>
    </div>
   
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.restaurant-list');
    if (restaurants.length !== 0) {
      restaurantContainer.innerHTML ='';
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Like;
