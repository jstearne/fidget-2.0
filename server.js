require('dotenv').config();
// Require modules
const express = require('express');
    
// Create the Express app
const app = express();
const port = 3000;    
// Configure the app (app.set...ejs)
app.set('view engine', 'ejs');
    
// Mount middleware (app.use functions)
app.use(express.static('public')); // serve images, css and js files in public/ folder
    
// Mount routes - this will link to your Routes folder
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});

// Tell the app to listen on port 3000
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});
