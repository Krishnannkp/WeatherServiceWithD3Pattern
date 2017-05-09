// <reference path="../weather.r.ts" />
var Weatherservice;
(function (Weatherservice) {
    'use strict';
    var appRun = (function () {
        function appRun(app) {
            this.app = app;
            this.app.run(['$log', '$rootScope',
                function ($log, $rootScope) {
                    $log.debug("+ Weatherservice.appRun.run()");
                }]);
        }
        return appRun;
    }());
    Weatherservice.appRun = appRun;
})(Weatherservice || (Weatherservice = {}));
//# sourceMappingURL=app-run.js.map