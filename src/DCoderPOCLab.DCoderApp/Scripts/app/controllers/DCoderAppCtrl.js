/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../interfaces/idcoderappscope.ts" />
/// <reference path="../models/menuitemmodel.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var DCoderAppCtrl = (function () {
            function DCoderAppCtrl($scope, $location) {
                this.$scope = $scope;
                this.$location = $location;
                this.$scope.title = "Falcon Force D-Coder";
                this.$scope.menuItems = this.getMenuItems();
            }
            DCoderAppCtrl.prototype.getMenuItems = function () {
                var menuItems = [
                    new app.models.MenuItemModel("Highlights", "/highlights", this.$location),
                    new app.models.MenuItemModel("People", "/people", this.$location),
                    new app.models.MenuItemModel("Open Jobs", "/open-jobs", this.$location)
                ];
                return menuItems;
            };
            DCoderAppCtrl.$inject = [
                '$scope',
                '$location'
            ];
            return DCoderAppCtrl;
        })();
        controllers.DCoderAppCtrl = DCoderAppCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=DCoderAppCtrl.js.map