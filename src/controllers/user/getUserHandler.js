const { getUserData } = require('../../database/queries');
const { boomify } = require('../../utils');

const getUserHandler = (req, res, next) => {
  const { name } = req.params;
  getUserData(name)
    .then((data) => {
      const userData = data.rows[0];
      if (!userData) {
        throw boomify(400, 'user not found');
      }
      res.json(data.rows[0]);
    })
    .catch(next);
};

module.exports = { getUserHandler };
