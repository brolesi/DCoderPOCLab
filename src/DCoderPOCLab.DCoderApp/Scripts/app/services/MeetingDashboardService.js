/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../interfaces/imeetingdashboardservice.ts" />
/// <reference path="../models/cardmodel.ts" />
var app;
(function (app) {
    (function (services) {
        'use strict';

        var MeetingDashboardService = (function () {
            function MeetingDashboardService() {
            }
            return MeetingDashboardService;
        })();
        services.MeetingDashboardService = MeetingDashboardService;
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
//# sourceMappingURL=MeetingDashboardService.js.map
