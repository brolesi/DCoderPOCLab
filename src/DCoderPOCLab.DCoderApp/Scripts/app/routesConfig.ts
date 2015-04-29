/// <reference path="main.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

module app {
    'use strict';

    angular.module('appMain').config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/highlights', {
                templateUrl: 'partials/highlights.html',
                controller: 'highlightsContentCtrl'
            }).when('/people', {
                templateUrl: 'partials/people.html',
                controller: 'peopleContentCtrl'
            }).when('/projects/TransCanada', {
                templateUrl: 'partials/project-TransCanada.html',
                controller: 'projectContentCtrl'
            }).when('/open-jobs', {
                templateUrl: 'partials/open-jobs.html',
                controller: 'openJobsContentCtrl'   
            }).when('/profile', {
                templateUrl: 'partials/profile.html',
                controller: 'profileCtrl'
            }).when('/open-jobs', {
                templateUrl: 'partials/open-jobs.html',
                controller: 'openJobsContentCtrl'   
            }).otherwise({
                redirectTo: '/',
                controller: 'searchTermContentCtrl'
            });
        }]);
}