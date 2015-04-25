/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var OpenJobsContentCtrl = (function (_super) {
            __extends(OpenJobsContentCtrl, _super);
            function OpenJobsContentCtrl($scope, $location) {
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                this.$scope.title = "Open Jobs";
            }
            OpenJobsContentCtrl.$inject = [
                '$scope',
                '$location'
            ];
            return OpenJobsContentCtrl;
        })(controllers.BaseContentCtrl);
        controllers.OpenJobsContentCtrl = OpenJobsContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=OpenJobsContentCtrl.js.map