const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    res.render('home'); // route '/' now goes to views/home.ejs
});

module.exports = router;