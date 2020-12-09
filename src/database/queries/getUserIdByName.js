const connection = require('../config/connection');

const getUserId = (name) => {
  const sql = {
    text: 'SELECT id FROM users WHERE name = $1;',
    values: [name],
  };
  return connection.query(sql);
};

module.exports = { getUserId };
