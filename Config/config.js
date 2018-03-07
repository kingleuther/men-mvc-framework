/**
 * Config File 
 * this file is where you will place your 
 * database configuration
 * 
 * please take note that this is 
 * still on an ongoing development
 */
'use strict';
var connectionURL = "mongodb://localhost/testdb";
var mongoose = require('mongoose');

class Config {
    mongo() {
        mongoose.Promise = global.Promise;
        // remove deprecationWarning error
        mongoose.connect(connectionURL);
        // get the default connection//localhost
        var db = mongoose.connection;
        // notification error for mongodb errors
        db.on('error', console.error.bind(
            console,
            'MongoDB Connection Error'
        ));
    }
}

module.exports = Config;
