/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import restaurantData from '../../data/restaurantdatadb-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';
import './../components/loading';
const Home = {
  async render() {
    return `
<div class="hero">
    <div class="hero_inner">
        <h1 class="hero__title">Restplore</h1>
        <p class="hero__tagline">Cari dan temukan restoran di berbagai penjuru Indonesia</p>
            <a class="button mt-3" href="#maincontent">Explore Resto</a>
    </div>
</div>
<section class="content">
    <article class="headline">
        <div class="headline-photo">
            <div>
                <img src="./images/headline/Almond.jpeg" alt="Almond">
                <div class="img-flex-container">
                    <div class="img-flex">
                        <img src="./images/headline/Chicken Skin.jpeg" alt="Chicken Skin">
                    </div>
                    <div class="img-flex">
                        <img src="./images/headline/Spicy Katsu RB.jpeg" alt="Spicy Katsu"></div>
                </div>
            </div>
        </div>
  
        <div class="headline-article">
            <p class="title mt-2">Restoran Dengan Menu yang terbaik edisi September</p>
            <p class="description mt-3">Hi Restplorer ! List restoran dengan menu-menu terbaik di bulan September udh keluar nih, mau tau gak restoran dengan menu-menu terbaik di bulan September
                ini ? Yuk simak selengkapnya: Di urutan Pertama ada Bring Your phone Cafe dengan menu almond nya yang khas ! Di urutan kedua ada...
            </p>
                <a class="button mt-3" href="#">Read More</a>
        </div>
    </article>
        <div class="restaurant" id="maincontent">
            <p class="title mt-2">Restoran Populer</p>
            <div class="restaurant-list mt-5">
            <div class="loading">
            <loading-svg></loading-svg>
            <h2 class="center">Loading Page, Harap Menunggu</h2>
            </div>
            </div>
        </div>
    </article>
</section>
      `;
  },

  async afterRender() {
    const restaurants = await restaurantData.restaurantList();
    const restaurantContainer = document.querySelector('.restaurant-list');
    if (restaurants) {
      this.successFetch(restaurants, restaurantContainer);
    } else {
      this.failedFetch(restaurantContainer);
    }
  },
  async successFetch(restaurants, restaurantContainer) {
    restaurantContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

  async failedFetch(restaurantContainer) {
    restaurantContainer.innerHTML = createPageNotFoundTemplate();
  },
};

export default Home;
