const router = require('express').Router();
const { getUserHandler } = require('../controllers');

router.get('/:name', getUserHandler);

router.use((err, req, res, next) => {
  console.log('here erroer');
  res.status(400).json({
    errors: [
      {
        title: 'Faild getting user',
        detail: 'somthing went wrong during getting usr',
        errorMessage: err.msg,
      },
    ],
  });
});

module.exports = router;
