'use strict';

var sql = require('../../db.js');

const StringBuilder = require("string-builder");
let sb = new StringBuilder();

//sb.append('<pre style="word-wrap: break-word; white-space: pre-wrap;">\n');
sb.append('# HELP http_requests_total The total number of HTTP requests.\n');
sb.append('# TYPE http_requests_total counter\n');
sb.append('orc_http_requests_total{method="post",code="200"} 1027 ').append(new Date().getTime()).append('\n'); 
sb.append('orc_http_requests_total{method="post",code="400"}    3 ').append(new Date().getTime()).append('\n'); 
var query = sb.toString();

var Data = function(data){
    this.prom = data.prom;
};

Data.getData = function(result){  
    result(null, query);
};

module.exports = Data;