/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />

module app.controllers {
    'use strict';

    export class OpenJobsContentCtrl extends BaseContentCtrl {

        public static $inject = [
            '$scope', '$location'
        ];

        constructor(private $scope: interfaces.IHighlightsContentScope, private $location: ng.ILocationService) {

            super();

            this.$scope.title = "Open Jobs";
        }
    }
}