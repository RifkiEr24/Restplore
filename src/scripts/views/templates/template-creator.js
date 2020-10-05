/* eslint-disable linebreak-style */
/* eslint-disable max-len */

const createPageNotFoundTemplate = () => `
<p class="center"><i class="far fa-nothing" aria-hidden="true"></i></p>
<p class="center mt-2">Maaf, Halaman yang anda tuju tidak dapat ditemukan atau terjadi kesalahan.</p>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this movie" id="likeButton" class="like p-1">
  <i class="far fa-heart" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="like this movie" id="likeButton" class="like p-1">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

const createReviewTemplate = (review) => `
<div class="review-item mt-2 p-2 rounded">
  <p class="name pl-2">${review.name}</p>
  <p class="time pl-2 mt-1"><i class="far fa-clock"></i> ${review.date}</p>
  <p class="pl-2 pr-2 mt-2">${review.review}</p>
</div>
`;

const createCategoryTemplate = (category) => `
<p class="category-item rounded">${category.name}</p>
`;
const createMenuTemplate = (menu) => `
<p class="center menu mt-2">${menu.name}</p>
`;

const createRestaurantDetailTemplate = (restaurant, category, food, drink) => `
  <div class="p-5">
    <div class="restaurant-detail-container">

      <div class="restaurant-detail-upper">
        <div class="pl-3 pr-3 pt-3 restaurant-image">
          <img class="rounded"
            src="https://dicoding-restaurant-api.el.r.appspot.com/images/large/${restaurant.pictureId}">
        </div>
        <div class="p-3 restaurant-information">

          <div class="info-group">
            <h2 class="mt-1">${restaurant.name}</h2>
            <div class="button-container"></div>
          </div>

          <div class="info-group detail mt-2">
            <h4><i class="fas fa-map-marker-alt"></i> ${restaurant.city}, ${restaurant.address}</h4>
            <h4><i class="fas fa-star"></i> ${restaurant.rating}</h4>
          </div>
          <p class="mt-2">${restaurant.description}</p>
          <h4 class="mt-3">Categories</h4>
          <div class="category-group mt-2">
            ${category}
          </div>
        </div>
      </div>
      <h2 class="center"><i class="fas fa-utensils"></i><br> Menu</h2>
      <div class="restaurant-detail-menu mt-2 pb-2">
        <div class="food">
          <h3 class="center"><i class="fas fa-hamburger"></i> Makanan</h3>
          ${food}
        </div>
        <div class="drink">
          <h3 class="center"><i class="fas fa-coffee"></i> Minuman</h3>
          ${drink}
        </div>
      </div>
    </div>
  </div>
    <div class="review pl-5 pr-5 mb-3">
      <h2> <i class="fas fa-comment-dots ml-2"></i> Customer Review</h2>
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

const createRestaurantItemTemplate = (restaurant) => `
    <div class="item">
      <div class="item-photo">
        <img src="https://dicoding-restaurant-api.el.r.appspot.com/images/medium/${restaurant.pictureId}"
          alt="${restaurant.name}">
      </div>
      <a class="link-detail" href="#/detail/${restaurant.id}"><i class="fas fa-search"></i></a>
      <div class="item-description" style="padding: 1rem;">
        <div class="info-group">
          <p><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
          <p><i class="fas fa-star"></i> ${restaurant.rating}</p>
        </div>
        <p class="restaurant-title mt-2">${restaurant.name}</p>
        <p class="description mt-2 pb-4">${restaurant.description.substr(0, 100)}....</p>

      </div>
    </div>
  </div>
  `;

export
{
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createMenuTemplate,
  createCategoryTemplate,
  createReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createPageNotFoundTemplate,
};
