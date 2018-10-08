const ZEROCRATER_BASE = 'https://app.zerocater.com/api/v3';

module.exports = {
  MEAL_URL: ZEROCRATER_BASE + '/meals/{mealId}',
  COMPANY_MEALS_URL: ZEROCRATER_BASE + '/companies/{companyId}/meals'
};
