/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../interfaces/ipeoplecontentctrlscope.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var ProfileCtrl = (function () {
            function ProfileCtrl($scope, $location) {
                this.$scope = $scope;
                this.$location = $location;
            }
            ProfileCtrl.$inject = [
                '$scope',
                '$location'
            ];
            return ProfileCtrl;
        })();
        controllers.ProfileCtrl = ProfileCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=ProfileCtrl.js.map