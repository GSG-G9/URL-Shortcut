const boomify = require('../../utils/boomify');
const { addNewUser, getUserId } = require('../../database/queries');

const logInUser = (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw boomify(400, 'User is required');
    }
    getUserId(name).then((data) => {
      console.log(data);
      if (data.rows.length === 0) {
        return addNewUser(name);
      }
    }).then(() => res.status(200).json({
      msg: 'login succeed',
      name,
    }));
  } catch (err) {
    next(err);
  }
};

module.exports = { logInUser };