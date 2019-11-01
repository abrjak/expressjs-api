'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'orc_clone'
});

connection.connect(function(error){
    if(error) throw error;
});

module.exports = connection;