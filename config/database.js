const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies', {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`We're also connected to MongoDB at:\n${db.host}:${db.port}`);
});

// terminal: $ mongosh
// new terminal: nodemon or node server.js 
// should see both this and app listener messages