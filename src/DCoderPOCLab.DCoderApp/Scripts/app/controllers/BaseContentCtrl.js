var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var BaseContentCtrl = (function () {
            function BaseContentCtrl() {
                //$(function () {
                //    $('.masonry-container').masonry({
                //        columnWidth: '.masonry-card.col-md-2',
                //        itemSelector: '.masonry-card',
                //    });
                //});
            }
            BaseContentCtrl.prototype.initCardContainer = function () {
                $('.masonry-container').masonry({
                    columnWidth: '.masonry-card.col-md-2',
                    itemSelector: '.masonry-card',
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