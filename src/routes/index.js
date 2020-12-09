const router = require('express').Router();
const user = require('./user');
const url = require('./url');

router.use('/user', user);

router.use('/url', url);

// router.use('/',row);

module.exports = router;
