'use strict';

var sql = require('../../db.js');

var User = function(user){
    this.id = user.id;
    this.name = user.name;
    this.created_at = new Date();
    this.valid = user.valid;
}

User.getAllUser = function(result){
    sql.query("SELECT * FROM test_data", function (err, res){
        if(err){
            console.log('error: ', err);
            result(null, err);
        } else {
            // console.log('user : ', res);
            result(null, res);
        }
    });
};

User.insertUser = function(newUser, result){
    sql.query("INSERT INTO test_data set ?", newUser, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        } else {
            // console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

module.exports = User;