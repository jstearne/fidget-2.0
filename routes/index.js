const router = require("express").Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');


// router.get('/', indexCtrl.index); OBSOLETE for now

// this exports "user" to the '/' index
router.get('/', function(req, res) { // get index for '/' route
    res.render('index', {
        user: req.user,
        posts:req.posts,
        comments:req.comments,
    });
});


// this exports "user" to the posts page
router.get('posts/', function(req, res) { // get index for '/' route
    res.render('posts/index', { // render posts/index.ejs (naming is confusing), include user/post/comment data
        user: req.user,
        posts:req.posts,
        comments:req.comments,
    });
});

// this exports "user" to the posts/new page
router.get('posts/new', function(req, res) { // get index for '/' route
    res.render('posts/new', { // render posts/index.ejs (naming is confusing), include user/post/comment data
        user: req.user,
    });
});

// without quotes AND batticks it crashes?
router.get('`/posts/${post._id}`', (req, res) => {
    res.render('comments', {
        user:req.user,
        comments:req.comments,
    });
});

// profile page "user"
router.get('/user', (req, res) => {
    res.render('user', {
        user:req.user,
        posts:req.posts,
    });
});

router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route - not working in deployment
router.get( 
    "/oauth2callback",
    passport.authenticate("google", {
      successRedirect: "/", 
      failureRedirect: "/",
    })
);
// OAuth logout route - working properly!
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/"); 
});

module.exports = router;