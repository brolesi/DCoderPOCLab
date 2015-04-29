/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />
/// <reference path="../interfaces/ipeoplecontentctrlscope.ts" />

module app.controllers {
    'use strict';

    export class PeopleContentCtrl extends BaseContentCtrl {

        public static $inject = [
            '$scope', '$location'
        ];

        constructor(private $scope: interfaces.IPeopleContentCtrlScope, private $location: ng.ILocationService) {

            super($scope);
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            myCards.push(new models.CardModel(
                1,
                "Vinicius Patrinhani",
                "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150",
                "Ana Luisa Correa de Oliveira Bezerra",
                "February 4, 2015",
                "5 Years: Marcos Leandro Francischinelli",
                "O +Marcos Leandro Francischinelli completou 5 anos de CI&T em Janeiro!! O prêmio foi entregue pelo...",
                "./ciandt-i/images/photo01.jpg",
                true)
                );

            for (var i = 1; i <= 20; i++) {

                myCards.push(new models.CardModel(
                    i,
                    "Vinicius Patrinhani (" + i + ")",
                    "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150",
                    "Ana Luisa Correa de Oliveira Bezerra",
                    "March 16, 2015",
                    "5 Years: Rodrigo Ramos Couto",
                    "O +Rodrigo Ramos Couto completou 5 anos de CI&T em Fevereiro!! O prêmio foi entregue pelo +Marcelo...",
                    "./ciandt-i/images/photo02.jpg")
                    );
            }

            return myCards;
        }
    }
}