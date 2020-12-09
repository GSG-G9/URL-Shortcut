const connection = require('../config/connection');

const getUserData = (name) => {
  const sql = {
    text: 'SELECT id, urlFull, urlShort, visitors FROM urls WHERE userId = (SELECT id FROM users WHERE name = $1);',
    values: [name],
  };
  return connection.query(sql);
};

module.exports = { getUserData };
