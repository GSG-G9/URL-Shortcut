const { getUserData } = require('../../database/queries');

const getUserHandler = (req, res) => {
  try {
    const { name } = req.params;
    getUserData(name)
      .then(console.log)
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {
    res.status(400).json({
      errors: [
        {
          title: 'Faild getting user',
          detail: 'somthing went wrong during getting usr',
          errorMessage: err.message,
        },
      ],
    });
  }
};

module.exports = getUserHandler;
