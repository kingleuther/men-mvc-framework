var express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var Config = require('./Config/config');

var routes = require('./Routes/routes');

var config = new Config();

config.mongo();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cookieSession({
    name: "MVC",
    keys: "MVC"
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);

app.listen(1337, function() {
    console.log('Listening at port 1337');
});