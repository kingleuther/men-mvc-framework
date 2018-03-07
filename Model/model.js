/**
 * Model
 * is used to transact
 * against your database
 */


'use strict';
var Schema = require('../Schema/schema');
var mongoose = require('mongoose');

class Model extends Schema {
    
    constructor() {
        super();
        console.log('Model is loaded');   
    }

    save(params) {
        var transModel = mongoose.model('trans', this.schema()); 
        var trans = new transModel();

        trans.amount = params.amount;
        trans.accountName = params.accountName;

        trans.save()
            .then(()=> {
                console.log('data saved');
            })
            .catch(()=>{

            });
    }

}

module.exports = Model;