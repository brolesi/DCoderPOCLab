/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../interfaces/imeetingdashboardscope.ts" />

module app.controllers {
    'use strict';

    export class MeetingDashboardCtrl {

        public static $inject = [
            '$scope'
        ];

        constructor(private $scope: interfaces.IMeetingDashboardScope) {

            this.$scope.title = "Meeting Dashboard";
        }
    }
}