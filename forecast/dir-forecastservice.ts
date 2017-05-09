/// <reference path="../weather.r.ts" />

namespace Weatherservice {
    'use strict';
    export class dirForeCastService implements ng.IDirective {
        constructor( private $log: ng.ILogService ) {     
        }
        //DIRECTIVE SETUP
        public restrict: string = 'E';
        public require: string[] = [];
        public templateUrl: string = 'source/forecast/forecastservice.html';
        public replace: boolean = true;
        public controllerAs: string = 'ctrlForeCastService';
        public controller: string = 'ctrlForeCastService';
        public bindToController: boolean = true;
        public scope: any = {};       

        static getDirective(): ng.IDirectiveFactory {
            const lNewDirective =
                ( $log: ng.ILogService ) =>
                    new dirForeCastService( $log );

            return lNewDirective;
        }
    }
}
