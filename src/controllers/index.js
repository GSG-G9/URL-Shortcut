const {
  getUserHandler, addUserUrlHandler, logInUser,
} = require('./user');
const { urlShortHandler } = require('./url');
const { errorhandler } = require('./errorHandler');
const { notFound, notFoundRoute } = require('./notFound');

module.exports = {
  getUserHandler,
  addUserUrlHandler,
  logInUser,
  urlShortHandler,
  errorhandler,
  notFound,
  notFoundRoute,
};
