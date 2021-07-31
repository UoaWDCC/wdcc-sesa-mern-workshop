const mongoose = require('mongoose');

const DEFAULT_CONNECTION_STRING = 'mongodb+srv://admin:admin@cluster0.4uxdi.mongodb.net/coding-contest?retryWrites=true&w=majority';

/**
 * This function begins the process of connecting to the database, and returns a promise that will
 * resolve when the connection is established.
 */ 
module.exports = function connectToDatabase(connectionString = DEFAULT_CONNECTION_STRING) {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true
    });
}