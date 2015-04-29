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
        var SearchTermContentCtrl = (function (_super) {
            __extends(SearchTermContentCtrl, _super);
            function SearchTermContentCtrl($scope, $location) {
                _super.call(this, $scope);
                this.$scope = $scope;
                this.$location = $location;
            }
            SearchTermContentCtrl.prototype.getCards = function () {
                var myCards = [];
                return myCards;
            };
            SearchTermContentCtrl.$inject = [
                '$scope',
                '$location'
            ];
            return SearchTermContentCtrl;
        })(controllers.BaseContentCtrl);
        controllers.SearchTermContentCtrl = SearchTermContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=SearchTermContentCtrl.js.map