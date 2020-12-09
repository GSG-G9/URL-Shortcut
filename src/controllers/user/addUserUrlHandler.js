const { boomify, createUrl } = require('../../utils');
const { checkUrlInDB, getUserId, addUrlData } = require('../../database/queries');

const addUserUrlHandler = (req, res, next) => {
  try {
    const { name, urlFull } = req.body;
    console.log({ name, urlFull });

    if (!name) {
      throw boomify(404, 'User not found');
    }
    if (!urlFull) {
      throw boomify(400, 'url is required');
    }
    const SHORT_URL_LENGHT = 7;
    const urlShort = createUrl(SHORT_URL_LENGHT);
    const visitors = 0;

    // checkUrlInDB(shortUrl).then((isData) => {
    // });

    getUserId(name).then((userId) => {
      userId = userId.rows[0].id;
      return addUrlData({
        urlFull, urlShort, visitors, userId,
      });
    }).then(() => {
      res.status(201).json({
        titles: 'adding url succeed',
        urlShort,
      });
    }).catch(next);
  } catch (err) {
    next(err);
  }
};

module.exports = { addUserUrlHandler };
