const Post = require('../models/post');
// const User = require('../models/user');

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
    Post.find({}, function(err, posts ) { // find all posts, and render with posts, user objects
        res.render('posts', { 
            title: 'All Posts', posts }); // /posts or errors
    });
};

// this exports "user" to the posts/new page
function newPost(req, res) {
    Post.find({}, function(err, posts ) { // find all posts, and render with posts, user objects
        res.render('posts/new', { 
            title: 'All Posts', posts }); // /posts or errors
    });
};

// show post details page
function show(req, res) {
    Post.findById(req.params.id, function(err, post ) {
        res.render('posts/comments', { title: 'comments', post });
    });
};

// creates the post and saves it to the database
function create(req, res) {
    const post = new Post(req.body); 
    post.save(function(err) {
        if (err) {
        return res.render('/new');
        } else {
        console.log(post);
        res.redirect(`/posts/${post._id}`);
        }  
    });
    posts.push(req.params.id);
    // post.author.push(req.user.name); // push current user name into the post object's user parameter
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