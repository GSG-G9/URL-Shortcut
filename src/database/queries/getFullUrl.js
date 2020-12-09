const connection = require('../config/connection');

const getFullUrl = (urlShort) => {
  const sql = {
    text: 'SELECT urlFull FROM urls WHERE urlShort = $1;',
    values: [urlShort],
  };
  return connection.query(sql);
};

module.exports = { getFullUrl };
