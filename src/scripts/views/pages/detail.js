/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

import UrlParser from '../../routes/url-parser';
import restaurantData from '../../data/restaurantdatadb-source';
import {createRestaurantDetailTemplate, createMenuTemplate, createCategoryTemplate, createReviewTemplate, createLikeButtonTemplate, createLikedButtonTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurantDetail" class="restaurant-detail"></div>
      <h2 class="ml-5"> <i class="fas fa-comment-dots ml-2"></i> Customer Review</h2>
      <div class="review pl-5 pr-5 mb-3">
      <div class="customer-review"></div>
      <h4 class="pl-2 mt-2">Tambahkan Komentar Mu Juga!</h4>
      <div class="review-item mt-2 p-2 rounded">
        <form action="" class="review-form">
          <input type="text " class="p-2 rounded" placeholder="Masukkan Nama Kamu">
          <textarea class="mt-2 p-2 rounded" placeholder="Masukkan Review Kamu"></textarea>
        </form>
     
   </div>
      </div>
    
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await restaurantData.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    const reviewContainer = document.querySelector('.customer-review');
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
    restaurantObject.consumerReviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewTemplate(review);
    });
    restaurantContainer.innerHTML =await createRestaurantDetailTemplate(restaurantObject, categories, foods, drinks);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.button-container'),
      restaurant: {
        id:  restaurantObject.id,
        pictureId: restaurantObject.pictureId,
        name:  restaurantObject.name,
        categories:  restaurantObject.categories,
        description:  restaurantObject.description,
        menus:  restaurantObject.menus,
        consumerReviews:  restaurantObject.consumerReviews,
        city:  restaurantObject.city,
        rating:  restaurantObject.rating,
      },
    });
  },
};

export default Detail;
