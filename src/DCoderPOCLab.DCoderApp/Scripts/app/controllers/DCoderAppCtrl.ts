/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../interfaces/idcoderappscope.ts" />
/// <reference path="../models/menuitemmodel.ts" />

module app.controllers {
    'use strict';

    export class DCoderAppCtrl {

        public static $inject = [
            '$scope', '$location'
        ];

        constructor(private $scope: interfaces.IDCoderAppScope, private $location: any) {

            this.$scope.title = "Falcon Force D-Coder";
            this.$scope.menuItems = this.getMenuItems();
        }

        private getMenuItems(): models.MenuItemModel[]{

            var menuItems: models.MenuItemModel[] = [
                new models.MenuItemModel("Highlights", "/highlights", this.$location)
                , new models.MenuItemModel("People", "/people", this.$location)
                , new models.MenuItemModel("Open Jobs", "/open-jobs", this.$location)
            ];

            return menuItems;
        }
    }
}