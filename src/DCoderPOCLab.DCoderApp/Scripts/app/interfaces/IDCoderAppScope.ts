/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../models/cardmodel.ts" />
/// <reference path="../models/menuitemmodel.ts" />

module app.interfaces {
    'use strict';

    export interface IDCoderAppScope extends ng.IScope {
        title: string;
        menuItems: models.MenuItemModel[];
    }
} 