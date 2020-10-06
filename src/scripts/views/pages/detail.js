/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

import UrlParser from '../../routes/url-parser';
import restaurantData from '../../data/restaurantdatadb-source';
import {createRestaurantDetailTemplate, createMenuTemplate, createCategoryTemplate, createReviewTemplate, createPageNotFoundTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import './../components/loading';
import addReview from '../../utils/add-review';
const Detail = {
  async render() {
    return `
   <div id="restaurantDetail" class="restaurant-detail">
     <loading-svg></loading-svg>
     <h2 class="center">Loading Page, Harap Menunggu</h2>
   </div>
 
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await restaurantData.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');

    if (restaurantDetail.restaurant) {
      this.successFetch(restaurantDetail, restaurantContainer);
    } else {
      console.log('gagal');
      this.failedFetch(restaurantContainer);
    }
  },

  async successFetch(restaurantDetail, restaurantContainer) {
    const restaurantObject = restaurantDetail.restaurant;
    let categories = '';
    let foods = '';
    let drinks = '';

    restaurantObject.categories.forEach((category) => {
      categories += createCategoryTemplate(category);
    });
    restaurantObject.menus.foods.forEach((food) => {
      foods += createMenuTemplate(food);
    });
    restaurantObject.menus.drinks.forEach((drink) => {
      drinks += createMenuTemplate(drink);
    });

    restaurantContainer.innerHTML =await createRestaurantDetailTemplate(restaurantObject, categories, foods, drinks);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.button-container'),
      restaurant: {
        id: restaurantObject.id,
        pictureId: restaurantObject.pictureId,
        name: restaurantObject.name,
        categories: restaurantObject.categories,
        description: restaurantObject.description,
        menus: restaurantObject.menus,
        consumerReviews: restaurantObject.consumerReviews,
        city: restaurantObject.city,
        rating: restaurantObject.rating,
      },
    });

    const reviewContainer = document.querySelector('.customer-review');
    this.refreshReview(restaurantObject, reviewContainer);
    const btnReview = document.querySelector('#submit');
    btnReview.addEventListener('click', () => {
      this.addReview(restaurantObject);
      this.refreshReview(restaurantObject, reviewContainer);
    });
  },

  async refreshReview(restaurantObject, reviewContainer) {
    restaurantObject.consumerReviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewTemplate(review);
    });
  },

  async addReview(restaurantObject) {
    const name = document.getElementById('name').value;
    const reviewUser = document.getElementById('review').value;
    addReview({id: restaurantObject.id, name: name, review: reviewUser});
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
  },

  async failedFetch(restaurantContainer) {
    restaurantContainer.innerHTML = createPageNotFoundTemplate();
  },
};

export default Detail;
