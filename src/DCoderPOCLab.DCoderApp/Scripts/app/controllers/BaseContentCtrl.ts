module app.controllers {
    'use strict';

    export class BaseContentCtrl {

        constructor() {

        }

        public onLoad(): void {

            alert("");
            this.initCardContainer();
        }

        public initCardContainer(): void {

            $('.masonry-container').masonry({
                columnWidth: '.masonry-card.item',
                itemSelector: '.masonry-card'
            });
        }

        public getCards(): models.ICardModel[] {
            return null;
        }
    }
}