'use strict';

var User = require('../model/appModel.js');
var Data = require('../model/dataModel.js');

exports.get_data = function(req, res){
    Data.getData(function(err, prom){
        res.send(prom);
    });
};

exports.get_all_user = function(req, res){
    User.getAllUser(function(err, user){
        // console.log('controller');
        if(err){
            res.send(err);
        } else {
            // console.log('res', user);
            
            res.json(user); 
        }
    }); 
};

exports.post_data = function(req, res){
    var new_user = new User(req.body);

    User.insertUser(new_user, function(err, user){
        if(err){
            res.send(err);
        } else {
            res.json(user);
        }
    });
};