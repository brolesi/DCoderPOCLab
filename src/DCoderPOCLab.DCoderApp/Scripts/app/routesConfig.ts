/// <reference path="main.ts" />

module app {
    'use strict';

    angular.module('appMain').config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/highlights', {
                templateUrl: 'partials/highlights.html',
                //controller: 'PhoneListCtrl'
            }).when('/people', {
                templateUrl: 'partials/people.html',
                //controller: 'PhoneListCtrl'
            }).when('/open-jobs', {
                templateUrl: 'partials/open-jobs.html',
                //controller: 'PhoneListCtrl'
            }).otherwise({
                redirectTo: '/highlights'
            });
        }]);
}