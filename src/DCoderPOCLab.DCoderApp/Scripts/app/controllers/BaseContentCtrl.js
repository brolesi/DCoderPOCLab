var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var BaseContentCtrl = (function () {
            function BaseContentCtrl() {
            }
            BaseContentCtrl.prototype.onLoad = function () {
                alert("");
                this.initCardContainer();
            };
            BaseContentCtrl.prototype.initCardContainer = function () {
                $('.masonry-container').masonry({
                    columnWidth: '.masonry-card.item',
                    itemSelector: '.masonry-card'
                });
            };
            BaseContentCtrl.prototype.getCards = function () {
                return null;
            };
            return BaseContentCtrl;
        })();
        controllers.BaseContentCtrl = BaseContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=BaseContentCtrl.js.map