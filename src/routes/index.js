const router = require('express').Router();
const user = require('./user');
const url = require('./url');
const { notFoundRoute } = require('../controllers');

router.use('/user', user);
router.use('/url', url);
router.use('/notFound', notFoundRoute);

module.exports = router;
