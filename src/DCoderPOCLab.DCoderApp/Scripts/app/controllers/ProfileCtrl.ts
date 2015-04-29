/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../interfaces/ipeoplecontentctrlscope.ts" />

module app.controllers {
    'use strict';

    export class ProfileCtrl {

        public static $inject = [
            '$scope', '$location'
        ];

        constructor(private $scope: interfaces.IPeopleContentCtrlScope, private $location: ng.ILocationService) {

        }
    }
}