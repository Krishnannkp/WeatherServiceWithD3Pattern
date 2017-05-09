// <reference path="../weather.r.ts" />

namespace Weatherservice{
    'use strict';
    export class appRun {
        constructor( private app: ng.IModule ) {
            this.app.run( ['$log', '$rootScope',
                function ( $log: ng.ILogService, $rootScope: ng.IRootScopeService ) {
                    $log.debug( `+ Weatherservice.appRun.run()` );

                }] );

        }
    }
}