// Require Mongoose, Set up db shortcut var:
const mongoose = require('mongoose');
const db = mongoose.connection;

// Configure Mongoose.connect
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

db.on('connected', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
  });
