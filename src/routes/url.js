const router = require('express').Router();
const { urlShortHandler } = require('../controllers');

router.get('/:urlShort', urlShortHandler);

router.use((err, req, res, next) => {
  console.log('here erroer');
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
