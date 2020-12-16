/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable new-cap */

Feature('Add Review Restaurant');


Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add Review', ({ I }) => {
  const reviewComment = 'Review with E2E Testing!';
  I.seeElement('.item div a');
  const firstRestaurantBtn = locate('.item div a').first();
  I.click(firstRestaurantBtn);
  I.fillField('input#name', 'E2E Test');
  I.fillField('textarea#review', reviewComment);
  I.click('button#submit');
});
