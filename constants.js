const ZEROCATER_BASE = 'https://app.zerocater.com/api/v3';

module.exports = {
  MEAL_URL: ZEROCATER_BASE + '/meals/{mealId}',
  COMPANY_MEALS_URL: ZEROCATER_BASE + '/companies/{companyId}/meals'
};
