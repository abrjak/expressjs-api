'use strict';

var Entry = require('../model/appModel.js');

exports.list_all_entries = function(req, res){
    Entry.getAllEntries(function(err, user){
        console.log('controller');
        if(err){
            res.send(err);
        } else {
            console.log('res', user);
            res.json(user);
        }
    });
};

// exports.read_user = function(req, res){
//     User.getUserById(req.params.userId, function(err, user){
//         if(err){
//             res.send(err);
//         } else {
//             res.json(user);
//         }
//     })
// }