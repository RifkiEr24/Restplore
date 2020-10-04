/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../globals/api-endpoint';

class restaurantData {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.restaurantList);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    return response.json();
  }
}
export default restaurantData;
