require('dotenv').config();
// Require modules
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const app = express();

// Configure the app (app.set...ejs)
app.set('view engine', 'ejs');

// Mount middleware (app.use functions)
app.use(morgan('dev'));
app.use(express.static('public'));
    
// Mount routes - this will link to your Routes folder (app.get)
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});
// home route
app.get('/home', function(req, res) {
    res.render('home');
});


// Tell the app to listen on port 3000
app.listen(PORT, () => {
    console.log(`Express is running. To see this website, visit: \nlocalhost:${PORT}/ `);
});
