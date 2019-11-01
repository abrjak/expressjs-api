'use strict';

var User = require('../model/appModel.js');

exports.list_all_user = function(req, res){
    User.getAllUser(function(err, user){
        console.log('controller');
        if(err){
            res.send(err);
        } else {
            console.log('res', user);
            res.json(user);
        }
    }); 
};

exports.insert_user = function(req, res){
    var new_user = new User(req.body);

    User.insertUser(new_user, function(err, user){
        if(err){
            res.send(err);
        } else {
            res.json(user);
        }
    });
};