/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/dcoderappctrl.ts" />
var app;
(function (app) {
    'use strict';
    var AppMain = angular.module('appMain', ['ngRoute']).directive('onLastRepeat', function () {
        return function (scope, element, attrs) {
            if (scope.$last) {
                setTimeout(function () {
                    scope.$emit('onRepeatLast', element, attrs);
                }, 1);
            }
        };
    }).controller('dCoderAppCtrl', app.controllers.DCoderAppCtrl).controller('highlightsContentCtrl', app.controllers.HighlightsContentCtrl).controller('openJobsContentCtrl', app.controllers.OpenJobsContentCtrl);
})(app || (app = {}));
//# sourceMappingURL=main.js.map