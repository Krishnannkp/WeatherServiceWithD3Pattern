/// <reference path="../weather.r.ts" />
var Weatherservice;
(function (Weatherservice) {
    'use strict';
    var ctrlForeCastService = (function () {
        function ctrlForeCastService($log, $scope, srvcForeCastService, $timeout) {
            this.$log = $log;
            this.$scope = $scope;
            this.srvcForeCastService = srvcForeCastService;
            this.$timeout = $timeout;
        }
        ctrlForeCastService.prototype.search = function (term) {
            return this.srvcForeCastService.search(term);
        };
        return ctrlForeCastService;
    }());
    Weatherservice.ctrlForeCastService = ctrlForeCastService;
})(Weatherservice || (Weatherservice = {}));
//# sourceMappingURL=ctrl-forecastservice.js.map