import proxyquire from 'proxyquire';
import sinon from 'sinon';
import test from 'ava';

const mockCompanyMealsURL = 'https://meals.com/{companyId}';
const stubAxios = {get: sinon.stub().resolves({data: []})};
const fetchMeals = proxyquire
  .noCallThru()
  .load('./fetch-meals', {
    axios: stubAxios,
    './constants': {
      COMPANY_MEALS_URL: mockCompanyMealsURL
    }
  });

test('calls the API endpoint with the expended params', async t => {
  const fakeCompanyId = 'abc123';
  const expectedCalledURL = mockCompanyMealsURL.replace('{companyId}', fakeCompanyId);
  await fetchMeals(fakeCompanyId);
  t.deepEqual(stubAxios.get.args, [[expectedCalledURL]]);
});
