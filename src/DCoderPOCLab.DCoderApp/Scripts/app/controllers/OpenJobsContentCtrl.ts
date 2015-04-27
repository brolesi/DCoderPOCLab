/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../models/cardmodel.ts" />
/// <reference path="basecontentctrl.ts" />

module app.controllers {
    'use strict';

    export class OpenJobsContentCtrl extends BaseContentCtrl {

        public static $inject = [
            '$scope', '$location'
        ];

        constructor(private $scope: interfaces.IBaseContentCtrlScope, private $location: ng.ILocationService) {

            super();

            $scope.$on('onRepeatLast', (scope, element, attrs) => {
                //work your magic

                this.initCardContainer();
            });

            this.$scope.cards = this.getCards();
        }

        public getCardClass(cardItem: models.ICardModel): string {
            return (cardItem.mainCard) ? "two-columns" : "one-column";
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            myCards.push({
                mainCard: true,
                cardId: 1,
                sourceName: "[CI&T] Career in Motion & People Awards",
                authorImageUrl: "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150",
                authorName: "Ana Luisa Correa de Oliveira Bezerra",
                authoringDate: "February 4, 2015",
                contentTitle: "5 Years: Marcos Leandro Francischinelli",
                contentSummary: "O +Marcos Leandro Francischinelli&nbsp;completou 5 anos de CI&amp;T em Janeiro!! O prêmio foi entregue pelo...",
                contentImageUrl: "https://lh4.ggpht.com/JdUCMMYjiUpfLXcvpx1ca3P2VnLWr8hVYaWFx10XkxxULiotAg1FGrTyOtj9-X05B9C2pgWNvEjvDgGb=s679-e7"
            });

            myCards.push({
                mainCard: false,
                cardId: 2,
                sourceName: "[CI&T] Career in Motion & People Awards (2)",
                authorImageUrl: "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150",
                authorName: "Ana Luisa Correa de Oliveira Bezerra",
                authoringDate: "March 16, 2015",
                contentTitle: "5 Years: Rodrigo Ramos Couto",
                contentSummary: "O +Rodrigo Ramos Couto&nbsp;completou 5 anos de CI&amp;T em Fevereiro!! O prêmio foi entregue pelo +Marcelo...",
                contentImageUrl: "https://lh6.ggpht.com/nEHcDJAtxAexKknIp34LmzAz96mMpWQUXt6PMcJ8Oz4qPXablWmM0GVVHNv-088oLRfIWT01-6N_guk=s349-e7"
            });

            myCards[0].mainCard = true;
            return myCards;
        }
    }
}