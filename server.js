require('dotenv').config();
// Require modules
const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const indexRouter = require('./routes/index');


const app = express();
require('./models/index');

// Configure the app (app.set...ejs)
app.set('view engine', 'ejs');

// Mount middleware (app.use functions)
app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/', indexRouter);

// home route
app.get('/home', function(req, res) {
    res.render('home');
});


// Tell the app to listen on port 3000
app.listen(PORT, () => {
    console.log(`Express is running. To see this website, visit: \nlocalhost:${PORT} `);
});
