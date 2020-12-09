const router = require('express').Router();
const { getUserHandler, addUserUrlHandler, logInUser } = require('../controllers');

router.get('/:name', getUserHandler);

router.post('/addUserUrlInfo', addUserUrlHandler);

router.post('/logInUser', logInUser);

router.use((err, req, res, next) => {
  res.status(400).json({
    errors: [
      {
        title: 'Faild getting user',
        detail: 'somthing went wrong during getting usr',
        errorMessage: err.message,
      },
    ],
  });
});

module.exports = router;
