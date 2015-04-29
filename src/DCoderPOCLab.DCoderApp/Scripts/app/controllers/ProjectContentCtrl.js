/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />
/// <reference path="../interfaces/ipeoplecontentctrlscope.ts" />
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
        var ProjectContentCtrl = (function (_super) {
            __extends(ProjectContentCtrl, _super);
            function ProjectContentCtrl($scope, $location) {
                _super.call(this, $scope);
                this.$scope = $scope;
                this.$location = $location;
            }
            ProjectContentCtrl.prototype.getCards = function () {
                var myCards = [];
                return myCards;
            };
            ProjectContentCtrl.$inject = [
                '$scope',
                '$location'
            ];
            return ProjectContentCtrl;
        })(controllers.BaseContentCtrl);
        controllers.ProjectContentCtrl = ProjectContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=ProjectContentCtrl.js.map