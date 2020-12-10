const router = require('express').Router();
const { urlShortHandler, notFound } = require('../controllers');

router.get('/:urlShort', urlShortHandler);
router.use(notFound);
module.exports = router;
