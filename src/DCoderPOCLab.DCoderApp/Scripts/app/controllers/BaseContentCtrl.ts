module app.controllers {
    'use strict';

    export class BaseContentCtrl {

        constructor($scope: interfaces.IBaseContentCtrlScope) {

            $scope.cards = this.getCards();

            $scope.$on('onRepeatLast',(scope, element, attrs) => {

                this.initCardContainer();
            });
        }

        public initCardContainer(): void {

            $('.masonry-container').masonry({
                columnWidth: '.masonry-card.col-md-2',
                itemSelector: '.masonry-card',
            });
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            return myCards;
        }
    }
}