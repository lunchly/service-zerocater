import proxyquire from 'proxyquire';
import sinon from 'sinon';
import test from 'ava';

const mockMealURL = 'https://meals.com/{mealId}';
const stubAxios = {get: sinon.stub().resolves({data: {}})};
const fetchMealById = proxyquire
  .noCallThru()
  .load('./fetch-meal-by-id', {
    axios: stubAxios,
    './constants': {
      MEAL_URL: mockMealURL
    }
  });

test('calls the meal endpoint with the expended params', async t => {
  const fakeMealId = 'xyz123';
  const expectedCalledURL = mockMealURL.replace('{mealId}', fakeMealId);
  await fetchMealById(fakeMealId);
  t.deepEqual(stubAxios.get.args, [[expectedCalledURL]]);
});
