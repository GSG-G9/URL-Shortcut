const { boomify, createUrl } = require('../../utils');
const {
  getUserId,
  addUrlData,
  checkUrlInDB,
} = require('../../database/queries');

const addUserUrlHandler = (req, res, next) => {
  try {
    const { name, urlFull } = req.body;

    if (!name) {
      throw boomify(400, 'name is required');
    }
    if (!urlFull) {
      throw boomify(400, 'url is required');
    }

    const SHORT_URL_LENGTH = 7;
    const visitors = 0;
    let urlShortTemp = '';
    createUrl(SHORT_URL_LENGTH, checkUrlInDB)
      .then((urlShort) => {
        urlShortTemp = urlShort;
        return getUserId(name);
      })
      .then((data) => {
        const userId = data.rows[0].id;
        return addUrlData({
          urlFull,
          urlShort: urlShortTemp,
          visitors,
          userId,
        }).then(() => {
          res.status(201).json({
            titles: 'adding url succeed',
            urlShort: urlShortTemp,
          });
        });
      });
  } catch (err) {
    next(err);
  }
};

module.exports = { addUserUrlHandler };
