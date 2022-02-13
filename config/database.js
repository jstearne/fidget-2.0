const mongoose = require('mongoose');

// points to variables defined by .env OR uses local mongosh
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/fidget', {
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