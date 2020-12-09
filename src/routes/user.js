const router = require('express').Router();
const { getUserHandler } = require('../controllers');

router.get('/:name', getUserHandler);

module.exports = router;
