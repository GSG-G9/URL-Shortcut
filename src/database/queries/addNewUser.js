const connection = require('../config/connection');

const addNewUser = (name) => {
  const sql = {
    text: 'INSERT INTO users(name) VALUES ($1);',
    values: [name],
  };
  return connection.query(sql);
};

module.exports = { addNewUser };
