// Require Modules:
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');

// Create App:
const app = express();

// Configure App:
require('dotenv').config();
require('./config/database');

// Mount Middleware:
app.use(morgan('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


// Mount API Routes:
app.use('/api/users', require('./routes/api/users'));
app.use(require('./config/auth'));
app.use('/api/todos', require('./routes/api/todos'));

// Mount "Catch-All" Route:
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 to avoid collision with React Dev Server:
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app is running on port ${port}`);
});
