'use strict';

var User = require('../model/appModel.js');
const StringBuilder = require("string-builder");
let sb = new StringBuilder();

exports.list_all_user = function(req, res){
    User.getAllUser(function(err, user){
        // console.log('controller');
        if(err){
            res.send(err);
        } else {
            // console.log('res', user);
            // res.json(user);
            sb.append('<pre style="word-wrap: break-word; white-space: pre-wrap;">');
            sb.append(new Date().toString());

            sb.append('collector_thread_count {name="svx-ch-itqp011.balgroupit.com"} 37 1572849843339');  
            res.send(sb.toString());
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