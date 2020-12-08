const router = require('express').Router();
const user = require('./user');

router.use('/user', user);
// router.use('/')
module.exports = router;
