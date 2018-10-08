const axios = require('axios');
const {MEAL_URL} = require('./constants');

module.exports = async mealId => {
  const url = MEAL_URL.replace('{mealId}', mealId);
  const {data} = await axios.get(url);
  return data;
};
