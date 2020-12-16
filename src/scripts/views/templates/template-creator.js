/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import CONFIG from './../../globals/config';
const createPageNotFoundTemplate = () => `
<p class="center"><i class="far fa-nothing" aria-hidden="true"></i></p>
<p class="center mt-2">Maaf, Halaman yang anda tuju tidak dapat ditemukan atau terjadi kesalahan.</p>
`;

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like p-1">
<svg class="icon small-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likedButton" class="like p-1">
<svg class="icon small-icon liked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg>
</button>
`;

const createReviewTemplate = (review) => `
<div class="review-item mt-2 p-2 rounded">
  <p class="name pl-2">${review.name}</p>
  <p class="time pl-2 mt-1">
  <svg class="icon fill-white inline clock" viewBox="0 0 24 28">
  <path d="M14 8.5v7c0 0.281-0.219 0.5-0.5 0.5h-5c-0.281 0-0.5-0.219-0.5-0.5v-1c0-0.281 0.219-0.5 0.5-0.5h3.5v-5.5c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM20.5 14c0-4.688-3.813-8.5-8.5-8.5s-8.5 3.813-8.5 8.5 3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z"></path>
    </svg>
   ${review.date}</p>
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
          <img class="lazyload" class="rounded"
            src="${CONFIG.BASE_IMG_URL}/small/${restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="p-3 restaurant-information">

          <div class="info-group">
            <h2 class="mt-1">${restaurant.name}</h2>
            <div class="button-container"></div>
          </div>

          <div class="info-group detail mt-2">
            <h4>
            <svg class="icon small-icon inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg> 
            ${restaurant.city}, ${restaurant.address}</h4>
            <h4>
            <svg class="icon small-icon inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg> 
            ${restaurant.rating}</h4>
          </div>
          <p class="mt-2">${restaurant.description}</p>
          <h4 class="mt-3">Categories</h4>
          <div class="category-group mt-2">
            ${category}
          </div>
        </div>
      </div>
      <h2 class="center">
      <svg class="icon medium-icon fill-white"  viewBox="0 0 32 32"><path d="M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z"></path>
      </svg>
       Menu</h2>
      <div class="restaurant-detail-menu mt-2 pb-2">
        <div class="food">
          <h3 class="center">
          <svg class="icon fill-white small-icon inline" viewBox="0 0 24 24">
          <path d="M2.016 15.984h19.969v2.016q0 0.797-0.586 1.406t-1.383 0.609h-16.031q-0.797 0-1.383-0.609t-0.586-1.406v-2.016zM5.344 13.5q-0.516 0-1.125 0.375-1.031 0.609-2.203 0.609v-1.969q0.516 0 1.125-0.375 1.078-0.656 2.203-0.656 1.078 0 2.156 0.656 0.609 0.375 1.172 0.375 0.516 0 1.125-0.375 1.078-0.656 2.203-0.656 1.078 0 2.156 0.656 0.609 0.375 1.172 0.375 0.516 0 1.125-0.375 1.078-0.656 2.203-0.656 1.078 0 2.156 0.656l1.172 0.375v1.969q-1.125 0-2.156-0.609-0.609-0.375-1.172-0.375-0.516 0-1.125 0.375-1.031 0.609-2.203 0.609-1.125 0-2.156-0.609-0.609-0.375-1.172-0.375-0.516 0-1.125 0.375-1.031 0.609-2.203 0.609-1.125 0-2.156-0.609-0.609-0.375-1.172-0.375zM21.984 9.984h-19.969q-0.234-2.438 2.719-4.219t7.266-1.781 7.266 1.781 2.719 4.219z"></path>
            </svg>
          Makanan
          </h3>
          ${food}
        </div>
        <div class="drink">
          <h3 class="center">
          <svg class="icon fill-white small-icon inline" viewBox="0 0 32 32">
          <path d="M24.306 0.527c-0.174-0.324-0.513-0.527-0.881-0.527h-14.85c-0.368 0-0.707 0.202-0.881 0.527-1.108 2.063-1.694 4.474-1.694 6.973 0 3.294 1.012 6.401 2.849 8.748 1.42 1.814 3.203 3.017 5.151 3.505v10.247h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h10c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-10.247c1.949-0.488 3.732-1.691 5.151-3.505 1.837-2.347 2.849-5.454 2.849-8.748 0-2.499-0.586-4.91-1.694-6.973zM9.191 2h13.619c0.78 1.653 1.191 3.542 1.191 5.5 0 0.168-0.003 0.334-0.009 0.5h-15.981c-0.006-0.166-0.009-0.332-0.009-0.5-0-1.958 0.41-3.847 1.191-5.5z"></path>
          </svg>
          Minuman</h3>
          ${drink}
        </div>
      </div>
    </div>
  </div>
    <div class="review pl-5 pr-5 mb-3">
      <h2 class="ml-2"> 
      <svg class="icon fill-white medium-icon inline" viewBox="0 0 28 28">
      <path d="M10 14c0-1.109-0.891-2-2-2s-2 0.891-2 2 0.891 2 2 2 2-0.891 2-2zM16 14c0-1.109-0.891-2-2-2s-2 0.891-2 2 0.891 2 2 2 2-0.891 2-2zM22 14c0-1.109-0.891-2-2-2s-2 0.891-2 2 0.891 2 2 2 2-0.891 2-2zM28 14c0 5.531-6.266 10-14 10-1.141 0-2.25-0.094-3.297-0.281-1.781 1.781-4.109 3-6.797 3.578-0.422 0.078-0.875 0.156-1.344 0.203-0.25 0.031-0.484-0.141-0.547-0.375v0c-0.063-0.25 0.125-0.406 0.313-0.578 0.984-0.922 2.156-1.656 2.562-4.953-2.984-1.828-4.891-4.547-4.891-7.594 0-5.531 6.266-10 14-10s14 4.469 14 10z"></path>
      </svg> &nbsp
      Customer Review</h2>
       <div class="customer-review"></div>
       <h4 class="pl-2 mt-2">Tambahkan Komentar Mu Juga!</h4>
       <div class="review-item mt-2 p-2 rounded">
         <form action="" class="review-form">
           <input type="text" class="p-2 rounded" aria-label="Name" name="name" id="name" placeholder="Masukkan Nama Kamu.." required>
           <textarea class="mt-2 p-2 rounded" id="review" aria-label="Review Anda" name="review" placeholder="Masukkan Review Kamu.." required></textarea>
           <button class="review-add rounded p-2 mt-2" id="submit">Tambahkan Review</button>
         </form>
       </div>
     </div>
    `;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="item">
      <div class="item-photo">
        <img class="lazyload" src="${CONFIG.BASE_IMG_URL}/small/${restaurant.pictureId}"
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
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createPageNotFoundTemplate,
};
