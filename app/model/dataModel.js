'use strict';

var sql = require('../../db.js');

const StringBuilder = require("string-builder");
let sb = new StringBuilder();

var Data = function(data){
    this.prom = data.prom;
};

Data.getData = function(result){
    sql.query("SELECT COUNT(*) AS count FROM test_data", function(err, res){
        if(err){
            console.log(err);
            result(null, err);
        } else {
            var count = res[0].count;
            sb.append('# HELP orc_user_total The total number of User in DB.\n');
            sb.append('# TYPE orc_user_total counter\n');
            sb.append('orc_user_total{method="post",code="200"} ').append(count).append(' ').append(new Date().getTime()).append('\n'); 
            result(null, sb.toString());
            sb.clear();
        }
    });  
};

module.exports = Data;