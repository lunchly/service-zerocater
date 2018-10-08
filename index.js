const todaysMeal = require('./todays-meal');
const fetchMealById = require('./fetch-meal-by-id');
const fetchMeals = require('./fetch-meals');

let allMeals;

const getMeals = async companyId => {
  const meals = allMeals || await fetchMeals(companyId);
  return meals;
};

/**
 * Get all meals.
 * @param {string} companyId The company ID to query.
 * @returns {array} The meals data.
 */
const all = async companyId => {
  const meals = await getMeals(companyId);
  return meals;
};

/**
 * Get today's meal.
 * @param {string} companyId The company ID to query.
 * @returns {object} The meal data.
 */
const today = async companyId => {
  const meals = await getMeals(companyId);

  const {id} = meals.find(todaysMeal);
  const meal = await fetchMealById(id);

  return meal;
};

module.exports.all = all;
module.exports.today = today;
