const { getFullUrl, updateVisitorsNum } = require('../../database/queries');

const urlShortHandler = (req, res, next) => {
  const { urlShort } = req.params;
  getFullUrl(urlShort).then((data) => {
    if (data.rows.length === 0) {
      return res.status(404).redirect('/notFound');
    }
    const { urlfull } = data.rows[0];

    return res.redirect(urlfull);
  }).catch(next);
};

module.exports = { urlShortHandler };
