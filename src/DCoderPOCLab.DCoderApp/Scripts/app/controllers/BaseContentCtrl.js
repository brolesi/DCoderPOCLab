var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var BaseContentCtrl = (function () {
            function BaseContentCtrl() {
                $('.masonry-container').masonry({
                    columnWidth: '.masonry-card.col-md-2',
                    itemSelector: '.masonry-card'
                });
            }
            return BaseContentCtrl;
        })();
        controllers.BaseContentCtrl = BaseContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=BaseContentCtrl.js.map