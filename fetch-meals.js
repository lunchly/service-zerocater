const axios = require('axios');
const {COMPANY_MEALS_URL} = require('./constants');

module.exports = async companyId => {
  const url = COMPANY_MEALS_URL.replace('{companyId}', companyId);
  const {data} = await axios.get(url);
  return data;
};
