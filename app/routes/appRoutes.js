'use strict';

module.exports = function(app){
    var expressjsApp = require('../controller/appController');
   
    app.route('/metrics')
        .get(expressjsApp.list_all_user)
        .post(expressjsApp.insert_user);
};