/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  restaurantList: `${CONFIG.BASE_URL}/list`,
  detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  addReview: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
