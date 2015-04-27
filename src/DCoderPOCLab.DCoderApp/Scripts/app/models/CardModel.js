var app;
(function (app) {
    var models;
    (function (models) {
        'use strict';
        var CardModel = (function () {
            function CardModel() {
                this.mainCard = false;
            }
            CardModel.prototype.getContentImgWidth = function () {
                if (this.mainCard)
                    return 507;
                else
                    return 241;
            };
            CardModel.prototype.getContentImgHeight = function () {
                if (this.mainCard)
                    return 380;
                else
                    return 181;
            };
            CardModel.prototype.getClass = function () {
                return (this.mainCard) ? "two-columns" : "one-column";
            };
            return CardModel;
        })();
        models.CardModel = CardModel;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=cardmodel.js.map