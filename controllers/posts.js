const Post = require('../models/post');
const User = require('../models/user');

// post index is posts/
module.exports = {
  index,
  show,
  new: newPost,
  create,
  updatePost,
  deletePost,
};

function index(req, res) {
    Post.find({}, function(err, posts, user) { // find all posts, and render with posts, user objects
        res.render('posts', { title: 'All Posts', posts, user: req.user }); // /posts or errors
    });
};

// go to new post page (doesn't CREATE a post! That's for the form)
function newPost(req, res) {
    res.render('posts/new');
};

// show post details page
function show(req, res) {
    Post.findById(req.params.id, function(err, post, user) {
        res.render('posts/comments', { title: 'comments', post, user: req.user });
    });
};

// creates the post and saves it to the database
function create(req, res) {
    const post = new Post(req.body); 
    const user = new User;
    post.save(function(err) {
        if (err) {
        return res.render('/new');
        } else {
        console.log(post);
        res.redirect(`/posts/${post._id}`);
        }  
    });
    user.posts.push(req.params.id);
    user.save(function (err) {
        if (err) return res.render('/new');
        console.log('Success!');
    });
};

// edit an existing post by ID
function updatePost(req, res) {
    Post.findByIdAndUpdate(req.params.id, { title: req.body.title, content: req.body.content } , function (err, post) {
        if (err) return res.send('404!');
        else {
        res.redirect(`/posts/${post._id}`);
        };
    });
};

// delete a post
function deletePost(req, res) {
    Post.findByIdAndDelete(req.params.id, function(err, post) {
        res.redirect('/posts');
    });
};