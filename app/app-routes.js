/// <reference path="../weather.r.ts" />
var Weatherservice;
(function (Weatherservice) {
    'use strict';
    var appRoutes = (function () {
        function appRoutes($stateProvider, $urlRouterProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
            //DIALOG ROUTES
            var lDialogRouteSettings = {
                foreCast: {
                    url: '/forecast',
                    data: {
                        isDialog: true,
                        controller: 'ctrlForeCastService',
                        controllerAs: 'ctrlForeCastService',
                        templateUrl: 'forecast/forecastservice.html'
                    }
                }
            };
            //CREATE THE DIALOG ROUTES
            Object.keys(lDialogRouteSettings).forEach(function (lDialogRouteSettingName) {
                var lDialogRouteSetting = lDialogRouteSettings[lDialogRouteSettingName];
                lDialogRouteSetting.data.validRoutes.forEach(function (lParentRoute) {
                    $stateProvider
                        .state(lParentRoute + "." + lDialogRouteSettingName, {
                        url: lDialogRouteSetting.url,
                        data: lDialogRouteSetting.data,
                        params: lDialogRouteSetting.params
                    });
                });
            });
        }
        return appRoutes;
    }());
    Weatherservice.appRoutes = appRoutes;
})(Weatherservice || (Weatherservice = {}));
//# sourceMappingURL=app-routes.js.map