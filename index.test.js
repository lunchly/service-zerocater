import proxyquire from 'proxyquire';
import sinon from 'sinon';
import test from 'ava';

const mockCompanyId = 'catahoula-inc-123';
const mockMealDetails = {
  name: 'Pho Ga',
  description: 'Pure deliciousness'
};
const mockMeals = [{
  id: 'pho-ga'
}, {
  id: 'cha-gio'
}];

const stubFetchMealById = sinon.stub()
  .withArgs('pho-ga').resolves(mockMealDetails);
const stubFetchMeals = sinon.stub()
  .withArgs(mockCompanyId).resolves(mockMeals);
const stubIsTodaysMeal = meal => {
  return meal.id === 'pho-ga';
};

const zerocaterService = proxyquire
  .noCallThru()
  .load('.', {
    './fetch-meal-by-id': stubFetchMealById,
    './fetch-meals': stubFetchMeals,
    './is-todays-meal': stubIsTodaysMeal
  });

test('it proxies calls to get all meals', async t => {
  const result = await zerocaterService.all(mockCompanyId);
  t.deepEqual(result, mockMeals);
});

test('it identifies and returns today\'s meal', async t => {
  const result = await zerocaterService.today(mockCompanyId);
  t.deepEqual(result, mockMealDetails);
});
