/**
 * Schema
 * is where you will place
 * your schema structure 
 * and return it as a
 * mongoose schema for the model
 * 
 * Mainly used by models
 */

'use strict';
var mongoose = require('mongoose');

class Schema {

    schema() {
        var sampleSchema = mongoose.Schema({
            amount: String,
            accountName: String
        });

        return sampleSchema;
        
    }
}

module.exports = Schema;