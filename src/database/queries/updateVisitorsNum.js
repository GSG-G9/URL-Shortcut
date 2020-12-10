const connection = require('../config/connection');

const updateVisitorsNum = (visitors, urlShort, name) => {
  const sql = {
    text: 'UPDATE urls SET visitors = $1 WHERE urlShort = $3 AND userId = (SELECT id FROM users WHERE name = $2);',
    values: [visitors, name, urlShort],
  };
  return connection.query(sql);
};

module.exports = { updateVisitorsNum };
