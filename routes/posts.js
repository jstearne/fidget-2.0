const router = require('express').Router();
const postCtrl = require('../controllers/posts');

router.get('/', postCtrl.index);


module.exports = router;