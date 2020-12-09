const { getUserData } = require('./getUserData');
const { addUrlData } = require('./addUrlData');
const { getFullUrl } = require('./getFullUrl');
const { addNewUser } = require('./addNewUser');
const { updateVisitorsNum } = require('./updateVisitorsNum');
const { getUserId } = require('./getUserIdByName');

module.exports = {
  getUserData,
  addUrlData,
  getFullUrl,
  addNewUser,
  updateVisitorsNum,
  getUserId,
};
