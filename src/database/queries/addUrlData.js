const connection = require('../config/connection');

const addUrlData = (urlData) => {
  const sql = {
    text: 'INSERT INTO urls(urlFull,urlShort,visitors,userId)  VALUES ($1, $2, $3, $4);',
    values: [urlData.urlFull, urlData.urlShort, urlData.visitors, urlData.userId],
  };
  return connection.query(sql);
};

module.exports = { addUrlData };
