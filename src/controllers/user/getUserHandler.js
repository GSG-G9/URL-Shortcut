const { getUserData } = require('../../database/queries');
const { boomify } = require('../../utils');

const getUserHandler = (req, res, next) => {
  const { name } = req.params;
  getUserData(name)
    .then((data) => {
      const userData = data.rows;
      if (userData.length === 0) {
        throw boomify(400, 'user not found');
      }
      res.json(data.rows);
    })
    .catch(next);
};

module.exports = { getUserHandler };
