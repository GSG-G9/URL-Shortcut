const { boomify, createUrl } = require('../../utils');
const { getUserId, addUrlData, checkUrlInDB } = require('../../database/queries');

const addUserUrlHandler = (req, res, next) => {
  try {
    const { name, urlFull } = req.body;

    if (!name) {
      throw boomify(404, 'User not found');
    }
    if (!urlFull) {
      throw boomify(400, 'url is required');
    }

    const SHORT_URL_LENGTH = 7;
    createUrl(SHORT_URL_LENGTH, checkUrlInDB).then((urlShort) => {
      const visitors = 0;
      getUserId(name).then((data) => {
        const userId = data.rows[0].id;
        return addUrlData({
          urlFull, urlShort, visitors, userId,
        });
      }).then(() => {
        res.status(201).json({
          titles: 'adding url succeed',
          urlShort,
        });
      });
    });

    // const visitors = 0;

    // getUserId(name).then((data) => {
    //   const userId = data.rows[0].id;
    //   return addUrlData({
    //     urlFull, urlShort, visitors, userId,
    //   });
    // }).then(() => {
    //   res.status(201).json({
    //     titles: 'adding url succeed',
    //     urlShort,
    //   });
    // }).catch(next);
  } catch (err) {
    next(err);
  }
};

module.exports = { addUserUrlHandler };
