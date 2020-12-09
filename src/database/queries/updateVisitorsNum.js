const connection = require('../config/connection');

const updateVisitorsNum = (visitors, urlId) => {
  const sql = {
    text: 'UPDATE urls SET visitors = \'$1\' WHERE id = $2;',
    values: [visitors, urlId],
  };
  return connection.query(sql);
};

module.exports = { updateVisitorsNum };
