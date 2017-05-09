var Weatherservice;
(function (Weatherservice) {
    'use strict';
    var appSettings = (function () {
        function appSettings() {
        }
        Object.defineProperty(appSettings, "APP_NAME", {
            get: function () { return 'Weatherservice'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(appSettings, "ANGULAR_LOGGING_ENABLED", {
            get: function () { return '@@AngularLoggingEnabled' === 'true'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(appSettings, "ANGULAR_DEBUG_ENABLED", {
            get: function () { return '@@AngularDebugEnabled' === 'true'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(appSettings, "LOCATION_USE_HTML5", {
            get: function () { return '@@LocationUseHTML5' === 'true'; },
            enumerable: true,
            configurable: true
        });
        return appSettings;
    }());
    Weatherservice.appSettings = appSettings;
})(Weatherservice || (Weatherservice = {}));
//# sourceMappingURL=app-settings.js.map