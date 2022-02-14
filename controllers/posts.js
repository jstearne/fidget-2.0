const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    index,
    show,
    
};

function index(req, res) {
    Post.find({}, function(err, posts, user) { // find all posts, and render with posts, user objects
        res.render('posts/', { title: 'All Posts', posts, user: req.user });
    });
};

// show post details page
function show(req, res) {
    Post.findById(req.params.id, function(err, post, user) {
        res.render('posts/comments', { title: 'comments', post, user: req.user });
    });
};

