/// <reference path="main.ts" />
var app;
(function (app) {
    'use strict';
    angular.module('appMain').config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/highlights', {
            templateUrl: 'partials/highlights.html',
            controller: 'highlightsContentCtrl'
        }).when('/people', {
            templateUrl: 'partials/people.html',
        }).when('/open-jobs', {
            templateUrl: 'partials/open-jobs.html',
            controller: 'openJobsContentCtrl'
        }).otherwise({
            redirectTo: '/highlights'
        });
    }]);
})(app || (app = {}));
//# sourceMappingURL=routesConfig.js.map