var express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 9091;

app.listen(port);

console.log('API Server started on: ' + port);

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes.js');
routes(app);
