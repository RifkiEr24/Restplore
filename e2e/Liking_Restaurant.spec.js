/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable new-cap */
Feature('Liking Restaurant');

const assert = require('assert');


Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.loading');
  I.see('Tidak ada Restoran untuk ditampilkan', '.no-restaurant-liked');
});


Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restoran untuk ditampilkan', '.no-restaurant-liked');
  I.amOnPage('/');
  I.seeElement('.item div a');
  I.seeElement('.restaurant-title');
  const firstRestaurantBtn = locate('.item div a').first();
  const firstRestaurant = locate('.restaurant-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantBtn);
  I.seeElement('#likeButton');
  const likedRestaurantTitle = await I.grabTextFrom('.info-group h2');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.item');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});


Scenario('Cancel liking  restaurant', async ({ I }) => {
  I.see('Tidak ada Restoran untuk ditampilkan', '.no-restaurant-liked');
  I.amOnPage('/');
  I.seeElement('.item div a');
  const firstRestaurantBtn = locate('.item div a').first();
  I.click(firstRestaurantBtn);

  I.seeElement('button#likeButton');
  I.click('button#likeButton');

  I.seeElement('button#likedButton');
  I.click('button#likedButton');

  I.amOnPage('/#/like');
  I.see('Tidak ada Restoran untuk ditampilkan', '.no-restaurant-liked');
});
