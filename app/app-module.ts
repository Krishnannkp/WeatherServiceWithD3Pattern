namespace Weatherservice {
    'use strict';

    export class appModule {
        private app: ng.IModule = null;
        private routes: appRoutes = null;
        private run: appRun = null;
        constructor() {
            this.app = angular.module( appSettings.APP_NAME,[])

            this.app.config( ['$stateProvider', '$urlRouterProvider',
             ( $stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider ) => {
                        this.routes = new appRoutes($stateProvider, $urlRouterProvider);
            }] );
            this.run = new appRun( this.app );
        }        
    }
    new appModule();
}