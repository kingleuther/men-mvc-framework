/**
 * Controller
 * Controller-
 * accepts inputs and converts it
 * to commands for model or view
 */


'use strict';
var Model = require('../Model/model');
class Controller extends Model {
    
    constructor(params) {
        super();
        this.value = params.value || 'default' 
        console.log('Controller is loaded');
    }

    saveTransaction(params) {
        return this.save(params); ;
    }
        
}
module.exports = Controller;