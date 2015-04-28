var app;
(function (app) {
    var models;
    (function (models) {
        'use strict';
        var CardModel = (function () {
            function CardModel(cardId, sourceName, authorImageUrl, authorName, authoringDate, contentTitle, contentSummary, contentImageUrl, mainCard) {
                if (mainCard === void 0) { mainCard = false; }
                this.cardId = cardId;
                this.sourceName = sourceName;
                this.authorImageUrl = authorImageUrl;
                this.authorName = authorName;
                this.authoringDate = authoringDate;
                this.contentTitle = contentTitle;
                this.contentSummary = contentSummary;
                this.contentImageUrl = contentImageUrl;
                this.mainCard = mainCard;
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
            //public getClass(): string {
            //    return (this.mainCard) ? "two-columns" : "one-column";
            //}
            CardModel.prototype.getClass = function () {
                return (this.mainCard) ? "col-md-4 col-sm-8 col-xs-12" : "col-md-2 col-sm-4 col-xs-6";
            };
            return CardModel;
        })();
        models.CardModel = CardModel;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=cardmodel.js.map