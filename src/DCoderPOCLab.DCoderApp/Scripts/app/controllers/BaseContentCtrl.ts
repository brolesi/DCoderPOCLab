module app.controllers {
    'use strict';

    export class BaseContentCtrl {

        constructor() {

            $('.masonry-container').masonry({
                columnWidth: '.masonry-card.col-md-2',
                itemSelector: '.masonry-card'
            });
        }
    }
}