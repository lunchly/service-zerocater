/**
 * Determines whether a meal is scheduled for today
 * @param {object} meal The ZeroCater meal object.
 * @returns {boolean} If a meal is scheduled for today.
 */
module.exports = meal => {
  const {time} = meal;

  const mealDay = new Date(time * 1000).setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);

  return mealDay === today;
};
