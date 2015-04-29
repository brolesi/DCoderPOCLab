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
        var PeopleContentCtrl = (function (_super) {
            __extends(PeopleContentCtrl, _super);
            function PeopleContentCtrl($scope, $location) {
                _super.call(this, $scope);
                this.$scope = $scope;
                this.$location = $location;
            }
            PeopleContentCtrl.prototype.getCards = function () {
                var myCards = [];
                myCards.push(new app.models.CardModel(1, "Vinicius Patrinhani", "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150", "Ana Luisa Correa de Oliveira Bezerra", "February 4, 2015", "5 Years: Marcos Leandro Francischinelli", "O +Marcos Leandro Francischinelli completou 5 anos de CI&T em Janeiro!! O prêmio foi entregue pelo...", "./ciandt-i/images/photo01.jpg", true));
                for (var i = 1; i <= 20; i++) {
                    myCards.push(new app.models.CardModel(i, "Vinicius Patrinhani (" + i + ")", "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150", "Ana Luisa Correa de Oliveira Bezerra", "March 16, 2015", "5 Years: Rodrigo Ramos Couto", "O +Rodrigo Ramos Couto completou 5 anos de CI&T em Fevereiro!! O prêmio foi entregue pelo +Marcelo...", "./ciandt-i/images/photo02.jpg"));
                }
                return myCards;
            };
            PeopleContentCtrl.$inject = [
                '$scope',
                '$location'
            ];
            return PeopleContentCtrl;
        })(controllers.BaseContentCtrl);
        controllers.PeopleContentCtrl = PeopleContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=PeopleContentCtrl.js.map