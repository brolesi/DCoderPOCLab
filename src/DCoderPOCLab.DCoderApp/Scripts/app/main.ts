/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/dcoderappctrl.ts" />

module app {
    'use strict';

    var AppMain = angular.module('appMain', ['ngRoute'])
        .controller('dCoderAppCtrl', app.controllers.DCoderAppCtrl);
}