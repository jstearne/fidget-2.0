const router = require("express").Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');


// router.get('/', indexCtrl.index); OBSOLETE for now

// this exports "user" to the '/' index
router.get('/', function(req, res) { // get index for '/' route
    res.render('index', {
        user: req.user
    });
});

// this exports "user" to the home page
router.get('/posts', function(req, res) { // get index for '/' route
    res.render('posts', {
        user: req.user
    });
});


router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route - working properly!
router.get( 
    "/oauth2callback",
    passport.authenticate("google", {
      successRedirect: "/", // this was the code problem. Redirect will go to Posts
      failureRedirect: "/", // splash page for non-logged-in users
    })
);
// OAuth logout route - working properly!
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/"); 
});

module.exports = router;