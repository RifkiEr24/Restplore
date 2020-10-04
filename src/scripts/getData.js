/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import data from './../DATA.json';

const get = () => {
  const restaurantData = data.restaurants;
  const container = document.querySelector('.restaurant-list');
  let content = '';

  for (let i = 0; i < data.restaurants.length; i++) {
    const desc = restaurantData[i].description;
    const descLimit = desc.substr(0, 200);
    content += `
        <div class="item">
        <div class="item-photo">
            <img src="${restaurantData[i].pictureId}" alt="${restaurantData[i].name}">
        </div>
        <div class="item-description radius-top-left radius-top-right" style="padding: 1rem;">
            <p><i class="fas fa-map-marker-alt"></i> ${restaurantData[i].city}</p>

           <p class="restaurant-title">${restaurantData[i].name}</p>
           <p class="description">${descLimit}....</p>
           <p class="rating"><i class="fas fa-star"></i> ${restaurantData[i].rating}</p>
        </div>
       
    </div>
        `;
  }

  container.innerHTML = content;
};

export default get;
