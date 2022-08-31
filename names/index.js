const peoplenames = require("../country/state/city/index");
const firstnames = require("../utilities/utils/index");

const getPeopleInCity = function (peoplenames) {
  return firstnames(peoplenames);
};

module.exports = getPeopleInCity;
