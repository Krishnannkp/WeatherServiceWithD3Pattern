namespace Weatherservice{
    'use strict';

    export class appSettings {
        public static get APP_NAME(): string { return 'Weatherservice';}

        public static get ANGULAR_LOGGING_ENABLED(): boolean { return ( <string>'@@AngularLoggingEnabled' ) === 'true'; }
        public static get ANGULAR_DEBUG_ENABLED(): boolean { return ( <string>'@@AngularDebugEnabled' ) === 'true'; }

        public static get LOCATION_USE_HTML5(): boolean { return ( <string>'@@LocationUseHTML5' ) === 'true'; }    

    }
}