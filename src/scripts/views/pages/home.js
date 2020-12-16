/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import restaurantData from '../../data/restaurantdatadb-source';

import './../components/loading';
const Home = {
  async render() {
    return `
<div class="hero">
    <div class="hero_inner">
      <picture>
          <source type="image/webp" srcset="./images/heros/heroimage-small.webp"
          media="(max-width: 600px)">
          <source type="image/webp" srcset="./images/heros/heroimage-large.webp"
          media="(min-width : 601px)">
          <img class="hero_img" src="./images/heros/heroimage-large.jpg" 
          srcset="./images/heros/heroimage-small.jpg 480w, ./images/heros/heroimage-large.jpg 800w"
          sizes="(max-width: 600px) 480px, 800px" alt="hero">
      </picture>
       
        <h1 class="hero__title">Restplore</h1>
        <p class="hero__tagline">Cari dan temukan restoran di berbagai penjuru Indonesia</p>
            <a class="button explore mt-3" href="#maincontent">Explore Resto</a>
    </div>
</div>
<section class="content">
    <article class="headline">
        <div class="headline-photo">
            <div>
              <picture>
                <source type="image/webp" srcset="./images/heros/Almond-small.webp"
                media="(max-width: 600px)">
                <source type="image/webp" srcset="./images/heros/Almond-large.webp"
                media="(min-width : 601px)">
                <img  src= "./images/heros/Almond-large.jpg" width="100%"
                srcset="./images/heros/Almond-small.jpg 480w, ./images/heros/Almond-large.jpg 800w"
               sizes="(max-width: 600px) 480px, 800px"   alt="Almond">
            </picture>
             
                <div class="img-flex-container">
                    <div class="img-flex">
                      <picture>
                        <source type="image/webp" srcset="./images/heros/ChickenSkin-small.webp"
                        media="(max-width: 600px)">
                        <source type="image/webp" srcset="./images/heros/ChickenSkin-large.webp"
                        media="(min-width : 601px)">
                        <img src="./images/heros/ChickenSkin-large.jpg" 
                        srcset="./images/heros/ChickenSkin-small.jpg 480w, ./images/heros/ChickenSkin-large.jpg 800w"  
                        sizes="(max-width: 600px) 480px, 800px" alt="Chicken Skin">
                    </picture>
                    </div>
                    <div class="img-flex">
                      <picture>
                        <source type="image/webp" srcset="./images/heros/SpicyKatsu-small.webp"
                        media="(max-width: 600px)">
                        <source type="image/webp" srcset="./images/heros/SpicyKatsu-large.webp"
                        media="(min-width : 601px)">
                        <img src="./images/heros/SpicyKatsu-large.jpg" width="100%"
                        srcset="./images/heros/SpicyKatsu-small.jpg 480w, ./images/heros/SpicyKatsu-large.jpg 800w"  
                        sizes="(max-width: 600px) 480px, 800px" alt="Spicy Katsu"></div>
                    </picture>
                    
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
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.data= restaurant;
      restaurantItem.setAttribute('class', 'item');
      restaurantContainer.appendChild(restaurantItem);
    });
  },

  async failedFetch(restaurantContainer) {
    restaurantContainer.innerHTML = createPageNotFoundTemplate();
  },
};

export default Home;
