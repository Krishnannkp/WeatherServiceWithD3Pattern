var Weatherservice;
(function (Weatherservice) {
    'use strict';
    var appModule = (function () {
        function appModule() {
            var _this = this;
            this.app = null;
            this.routes = null;
            this.run = null;
            this.app = angular.module(Weatherservice.appSettings.APP_NAME, []);
            this.app.config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    _this.routes = new Weatherservice.appRoutes($stateProvider, $urlRouterProvider);
                }]);
            this.run = new Weatherservice.appRun(this.app);
        }
        return appModule;
    }());
    Weatherservice.appModule = appModule;
    new appModule();
})(Weatherservice || (Weatherservice = {}));
//# sourceMappingURL=app-module.js.map