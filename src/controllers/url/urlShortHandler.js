const { boomify } = require('../../utils');
const { getFullUrl } = require('../../database/queries');

const urlShortHandler = (req, res, next) => {
  const { urlShort } = req.params;
  getFullUrl(urlShort).then((data) => {
    if (data.rows.length === 0) {
      throw boomify(404, 'url not found');
    }
    const { urlFull } = data.rows[0];
    res.redirect(urlFull);
  }).catch(next);
};

module.exports = { urlShortHandler };
