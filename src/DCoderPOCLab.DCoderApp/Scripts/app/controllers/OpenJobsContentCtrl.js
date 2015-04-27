/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../models/cardmodel.ts" />
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
                var _this = this;
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                $scope.$on('onRepeatLast', function (scope, element, attrs) {
                    //work your magic
                    _this.initCardContainer();
                });
                this.$scope.cards = this.getCards();
            }
            OpenJobsContentCtrl.prototype.getCardClass = function (cardItem) {
                return (cardItem.mainCard) ? "two-columns" : "one-column";
            };
            OpenJobsContentCtrl.prototype.getCards = function () {
                var myCards = [];
                myCards.push({
                    mainCard: true,
                    cardId: 1,
                    sourceName: "[CI&T] Career in Motion & People Awards",
                    authorImageUrl: "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150",
                    authorName: "Ana Luisa Correa de Oliveira Bezerra",
                    authoringDate: "February 4, 2015",
                    contentTitle: "5 Years: Marcos Leandro Francischinelli",
                    contentSummary: "O +Marcos Leandro Francischinelli&nbsp;completou 5 anos de CI&amp;T em Janeiro!! O prêmio foi entregue pelo...",
                    contentImageUrl: "https://lh4.ggpht.com/JdUCMMYjiUpfLXcvpx1ca3P2VnLWr8hVYaWFx10XkxxULiotAg1FGrTyOtj9-X05B9C2pgWNvEjvDgGb=s679-e7"
                });
                myCards.push({
                    mainCard: false,
                    cardId: 2,
                    sourceName: "[CI&T] Career in Motion & People Awards (2)",
                    authorImageUrl: "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150",
                    authorName: "Ana Luisa Correa de Oliveira Bezerra",
                    authoringDate: "March 16, 2015",
                    contentTitle: "5 Years: Rodrigo Ramos Couto",
                    contentSummary: "O +Rodrigo Ramos Couto&nbsp;completou 5 anos de CI&amp;T em Fevereiro!! O prêmio foi entregue pelo +Marcelo...",
                    contentImageUrl: "https://lh6.ggpht.com/nEHcDJAtxAexKknIp34LmzAz96mMpWQUXt6PMcJ8Oz4qPXablWmM0GVVHNv-088oLRfIWT01-6N_guk=s349-e7"
                });
                myCards[0].mainCard = true;
                return myCards;
            };
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