/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />
/// <reference path="../interfaces/ipeoplecontentctrlscope.ts" />

module app.controllers {
    'use strict';

    export class ProjectContentCtrl extends BaseContentCtrl {

        public static $inject = [
            '$scope', '$location'
        ];

        constructor(private $scope: interfaces.IProjectContentCtrlScope, private $location: ng.ILocationService) {

            super($scope);

            this.$scope.title = "TransCanada";
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            return myCards;
        }
    }
}