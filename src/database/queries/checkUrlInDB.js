const connection = require('../config/connection');

const checkUrlInDB = (urlShort) => {
  const sql = {
    text: 'SELECT id FROM urls WHERE urlShort = $1;',
    values: [urlShort],
  };
  return connection
    .query(sql)
    .then((data) => data.rows.length !== 0);
};

module.exports = { checkUrlInDB };
