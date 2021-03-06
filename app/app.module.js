'use strict';

require('./modules/directives');
require('./modules/services');
// require('./modules/viewChart/viewChart.module');
require('./modules/login/login.module');
require('./modules/panel/panel.module');
require('./modules/dashBoard/dashBoard.module');
var appDependencies = [
    'ui.router', 'ui.bootstrap',
    'app.directive', 'app.service',
    'app.login', 'app.dashBoard',
    'app.panel'
];

module.exports = angular.module('app', appDependencies);
