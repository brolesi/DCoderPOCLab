var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var BaseContentCtrl = (function () {
            function BaseContentCtrl($scope) {
                var _this = this;
                $scope.cards = this.getCards();
                $scope.$on('onRepeatLast', function (scope, element, attrs) {
                    _this.initCardContainer();
                });
            }
            BaseContentCtrl.prototype.initCardContainer = function () {
                $('.masonry-container').masonry({
                    columnWidth: '.masonry-card.col-md-2',
                    itemSelector: '.masonry-card',
                });
            };
            BaseContentCtrl.prototype.getCards = function () {
                var myCards = [];
                return myCards;
            };
            return BaseContentCtrl;
        })();
        controllers.BaseContentCtrl = BaseContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=basecontentctrl.js.map