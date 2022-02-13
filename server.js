require('dotenv').config();
// Require modules
const express = require('express');

// connect to the database with Mongoose
require('./config/database');

// always in this order for the const variables
const morgan = require('morgan');
const session = require('express-session'); // always below morgan
const passport = require('passport'); // always below session
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');


const app = express();
require('./models/index');

// Configure the app (app.set...ejs)
app.set('view engine', 'ejs');

// Mount middleware (app.use functions)
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// google strategy
app.use(
    session({
        secret: "JaredIsCool", // whatever I want it to be
        resave: false,
        saveUninitialized: true,
    })
);
// app.use(session({... code above
app.use(passport.initialize());
app.use(passport.session());

const methodOverride = require('method-override');

// proper way of mounting routes 
app.use('/', indexRouter); // this goes to HOME

// home route: redundant!
app.get('/home', function(req, res) {
    res.render('home');
});


// Tell the app to listen on port 3000
app.listen(PORT, () => {
    console.log(`Express is running. To see this website, visit: \nlocalhost:${PORT} `);
});
