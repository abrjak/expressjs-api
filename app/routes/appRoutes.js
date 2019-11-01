'use strict';

module.exports = function(app){
    var expressjsApp = require('../controller/appController');

    app.route('/')
        

    app.route('/history')
        .get(expressjsApp.list_all_entries);

    // app.route('/user/:userId')
    //     .get(expressjsApp.read_user);
};