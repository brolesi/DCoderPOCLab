/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />

module app.controllers {
    'use strict';

    export class SearchTermContentCtrl extends BaseContentCtrl {

        public static $inject = [
            '$scope', '$location'
        ];

        constructor(private $scope: interfaces.ISearchTermContentCtrlScope, private $location: ng.ILocationService) {

            super($scope);
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            return myCards;
        }
    }
}