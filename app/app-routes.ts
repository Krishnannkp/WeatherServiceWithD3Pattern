/// <reference path="../weather.r.ts" />

namespace Weatherservice {
    'use strict';

    export class appRoutes {
        constructor( private $stateProvider: angular.ui.IStateProvider, private $urlRouterProvider: angular.ui.IUrlRouterProvider ) {
       
            //DIALOG ROUTES
            var lDialogRouteSettings: any = {
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
            Object.keys( lDialogRouteSettings ).forEach( lDialogRouteSettingName => {
                var lDialogRouteSetting: any = ( <any>lDialogRouteSettings )[lDialogRouteSettingName];

                ( <string[]>lDialogRouteSetting.data.validRoutes ).forEach( lParentRoute => {
                    $stateProvider
                        .state( `${lParentRoute}.${lDialogRouteSettingName}`, {
                            url: lDialogRouteSetting.url,
                            data: lDialogRouteSetting.data,
                            params: lDialogRouteSetting.params
                        });
                });
            });

        }

    }
}
