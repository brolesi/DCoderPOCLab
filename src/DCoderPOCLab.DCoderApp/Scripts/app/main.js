/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/dcoderappctrl.ts" />
var app;
(function (app) {
    'use strict';
    var AppMain = angular.module('appMain', ['ngRoute']).controller('dCoderAppCtrl', app.controllers.DCoderAppCtrl);
})(app || (app = {}));
//# sourceMappingURL=main.js.map