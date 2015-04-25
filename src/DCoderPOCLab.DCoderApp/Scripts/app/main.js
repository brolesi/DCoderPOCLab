/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/dcoderappctrl.ts" />
var app;
(function (app) {
    'use strict';
    var AppMain = angular.module('appMain', ['ngRoute']).controller('dCoderAppCtrl', app.controllers.DCoderAppCtrl).controller('highlightsContentCtrl', app.controllers.HighlightsContentCtrl).controller('openJobsContentCtrl', app.controllers.OpenJobsContentCtrl);
})(app || (app = {}));
//# sourceMappingURL=main.js.map