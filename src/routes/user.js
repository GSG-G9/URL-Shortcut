const router = require('express').Router();
const { getUserHandler, addUserUrlHandler, logInUser } = require('../controllers');

router.get('/:name', getUserHandler);

router.post('/addUserUrlInfo', addUserUrlHandler);

router.post('/logInUser', logInUser);

module.exports = router;
