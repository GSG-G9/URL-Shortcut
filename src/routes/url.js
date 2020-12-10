const router = require('express').Router();
const { urlShortHandler } = require('../controllers');

router.get('/:urlShort', urlShortHandler);

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(400).json({
    errors: [
      {
        title: 'Fails in user operation',
        detail: 'something went wrong during getting usr',
        errorMessage: err.message,
      },
    ],
  });
});

module.exports = router;
