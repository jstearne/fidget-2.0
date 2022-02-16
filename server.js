require('dotenv').config();

// Required modules
const express = require('express');
const app = express();

// connect to the database with Mongoose, passport for auth
require('./config/database'); // db connect
// require('./config/passport'); // auth
require('./models/post'); // models
require('./models/user'); // models

// always in this order for the const variables
const morgan = require('morgan');
const session = require('express-session'); // always below morgan
const passport = require('passport'); // always below session
const methodOverride = require('method-override');
const favicon = require('serve-favicon');
const path = require('path');


const PORT = process.env.PORT || 3000;

// routes shortcuts
const indexRouter = require('./routes/index');
const postRouter = require('./routes/posts');
const commentRouter = require('./routes/comments');
const userRouter = require('./routes/user');


// Configure the app (app.set...ejs)
app.set('view engine', 'ejs');

// Mount middleware (app.use functions)
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

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

// proper way of mounting routes 
app.use('/', indexRouter); // this goes to / "index"
app.use('/posts', postRouter);
app.use('/', commentRouter);
app.use('/', userRouter);
// // home route: redundant!
// app.get('/home', function(req, res) {
//     res.render('home');
// });


// Tell the app to listen on port 3000
app.listen(PORT, () => {
    console.log(`Express is running. To see this website, visit: \nlocalhost:${PORT} `);
});
