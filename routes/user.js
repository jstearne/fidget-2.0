const router = require('express').Router();
const userCtrl = require('../controllers/user'); // require user controller

router.get('/', userCtrl.getUserWithPosts); // user index route

module.exports = router;