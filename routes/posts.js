const router = require('express').Router();
const postCtrl = require('../controllers/posts');
const commentsCtrl = require('../controllers/comments');

router.get('/', postCtrl.index);
router.get('/new', postCtrl.new);
router.get('/:id', postCtrl.show); 
router.post('/', postCtrl.create); 
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);

module.exports = router;