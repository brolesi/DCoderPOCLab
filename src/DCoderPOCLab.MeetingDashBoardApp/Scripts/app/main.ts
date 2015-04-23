/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/meetingdashboardctrl.ts" />

module app {
    'use strict';

    var AppMain = angular.module('appMain', [])
        .controller('meetingDashboardCtrl', app.controllers.MeetingDashboardCtrl);
}