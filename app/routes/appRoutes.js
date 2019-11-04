'use strict';

module.exports = function(app){
    var ctrl = require('../controller/appController');
   
    app.route('/metrics')
        .get(ctrl.get_data);

    app.route('/update')
        .post(ctrl.post_data);
        
    app.route('/user')
        .get(ctrl.get_all_user);
};