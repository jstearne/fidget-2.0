const Post = require('../models/post');

module.exports = {
    index,
    create,
    deleteComment,
    updatePost,
};

// this works fine
// function index(req, res) {
//     Post.find({}, function(err, post ) {
//       res.render(`/posts/${post._id}`, { title: 'Comments', post });
//     });
// };
function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render(`/posts/${post._id}`, {
            posts
        });
    });
}

// req.body = post object, including array of comments
function create(req, res) {
    Post.findById(req.params.id, function (err, post) {
        post.comments.push(req.body);
        post.save(function (err) {
            res.redirect(`/posts/${post._id}`);
        })
    })
}



// obsolete, delete
function deleteComment(req, res) {
    Post.findByIdAndDelete(req.params.id, function(err, post) {
        res.redirect(`/posts/${post._id}`);
    });
}


function updatePost(req, res) {
    console.log(req.body._id)
    Post.findByIdAndUpdate(req.params.id, function(err, post) {
        if (err) return res.send('404!')
    else {
        res.redirect(`/posts/${post._id}`);
    }

    })
};