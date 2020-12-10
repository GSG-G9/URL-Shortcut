const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

// DB build function
module.exports = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  connection
    .query(sql)
    .then(() => {
      console.log('Database is created');
    })
    .catch((err) => console.log('err', err));
};
