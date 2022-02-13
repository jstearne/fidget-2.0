const router = require("express").Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');


// router.get('/', indexCtrl.index);
router.get('/', function(req, res) {
    res.render('index', {
        user: req.user
    });
});
  


router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
    "/oauth2callback",
    passport.authenticate("google", {
      successRedirect: "/home",
      failureRedirect: "/",
    })
);
// OAuth logout route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/"); // need to define this view
});

module.exports = router;