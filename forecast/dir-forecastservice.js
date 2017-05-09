/// <reference path="../weather.r.ts" />
var Weatherservice;
(function (Weatherservice) {
    'use strict';
    var dirForeCastService = (function () {
        function dirForeCastService($log) {
            this.$log = $log;
            //DIRECTIVE SETUP
            this.restrict = 'E';
            this.require = [];
            this.templateUrl = 'source/forecast/forecastservice.html';
            this.replace = true;
            this.controllerAs = 'ctrlForeCastService';
            this.controller = 'ctrlForeCastService';
            this.bindToController = true;
            this.scope = {};
        }
        dirForeCastService.getDirective = function () {
            var lNewDirective = function ($log) {
                return new dirForeCastService($log);
            };
            return lNewDirective;
        };
        return dirForeCastService;
    }());
    Weatherservice.dirForeCastService = dirForeCastService;
})(Weatherservice || (Weatherservice = {}));
//# sourceMappingURL=dir-forecastservice.js.map