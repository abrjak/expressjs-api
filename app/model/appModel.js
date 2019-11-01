'use strict';

var sql = require('../../db.js');

var Entry = function(entry){
this.PSC_UNIQUE_NAME = entry.PSC_UNIQUE_NAME;
this.PSC_NAME = entry.PSC_NAME;
this.PSC_DEPLOYED_AT = entry.PSC_DEPLOYED_AT;
};

Entry.getAllEntries = function(result){
    sql.query("SELECT PSC_UNIQUE_NAME, PSC_NAME, PSC_DEPLOYED_AT FROM orc_clone_process_scenario_history", function (err, res){
        if(err){
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('user : ', res);
            result(null, res);
        }
    });
};

// User.getUserById = function(userId, result){
//     sql.query("SELECT * FROM test_data WHERE bkey = ?", userId, function(err, res){
//         if(err){
//             console.log('error: ', err);
//             result(null, err);
//         } else {
//             console.log('user : ', res);
//             result(null, res);
//         }
//     });
// };

module.exports = Entry;