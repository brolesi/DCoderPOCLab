var app;
(function (app) {
    var models;
    (function (models) {
        'use strict';
        var MenuItemModel = (function () {
            function MenuItemModel(label, url, $location) {
                this.label = label;
                this.url = url;
                this.$location = $location;
            }
            MenuItemModel.prototype.isActive = function () {
                return this.url === this.$location.path();
            };
            return MenuItemModel;
        })();
        models.MenuItemModel = MenuItemModel;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=menuitemmodel.js.map