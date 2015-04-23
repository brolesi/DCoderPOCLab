/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../interfaces/imeetingdashboardscope.ts" />
var app;
(function (app) {
    (function (controllers) {
        'use strict';

        var MeetingDashboardCtrl = (function () {
            function MeetingDashboardCtrl($scope) {
                this.$scope = $scope;
                this.$scope.title = "Meeting Dashboard";
            }
            MeetingDashboardCtrl.$inject = [
                '$scope'
            ];
            return MeetingDashboardCtrl;
        })();
        controllers.MeetingDashboardCtrl = MeetingDashboardCtrl;
    })(app.controllers || (app.controllers = {}));
    var controllers = app.controllers;
})(app || (app = {}));
//# sourceMappingURL=MeetingDashboardCtrl.js.map
