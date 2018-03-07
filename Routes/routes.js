/**
 * Routes file
 * is where you will place your routes 
 * within your app  
 * */

'use strict';
var express = require('express');;
var router = express.Router();
var Controller = require('../Controller/controller');
var cont = new Controller({});


router.get('/send', function (req, res) {
    res.render('view', {
    });
});

router.post('/submit', function (req, res) {
    cont.saveTransaction({
        amount: req.body.amount,
        accountName: req.body.accountName
    })

    res.render('view');
});

module.exports = router