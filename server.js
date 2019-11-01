var express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 3001;

const mysql = require('mysql');

const mc = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'orc_clone' 
});

mc.connect();

app.listen(port);

console.log('API Server started on: ' + port);

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes.js');
routes(app);
