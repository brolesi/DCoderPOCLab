module app.controllers {
    'use strict';

    export class BaseContentCtrl {

        constructor() {

            //$(function () {
            //    $('.masonry-container').masonry({
            //        columnWidth: '.masonry-card.col-md-2',
            //        itemSelector: '.masonry-card',
            //    });
            //});
        }

        public initCardContainer(): void {

            $('.masonry-container').masonry({
                columnWidth: '.masonry-card.col-md-2',
                itemSelector: '.masonry-card',
            });
        }

        public getCards(): models.ICardModel[] {
            return null;
        }
    }
}