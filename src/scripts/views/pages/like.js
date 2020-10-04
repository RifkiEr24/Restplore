/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <h2 class="ml-4">Restoran Favorit Kamu</h2>
    <div class="restaurant-list p-5">

    </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
