/// <reference path="../weather.r.ts" />

namespace Weatherservice{
    'use strict';
    export class ctrlForeCastService {  
        constructor( private $log: ng.ILogService,
            private $scope: ng.IScope,
            private srvcForeCastService: srvcForeCastService,
            private $timeout: ng.ITimeoutService ) {

                   
        }
public search(term:string)
{
return this.srvcForeCastService.search(term);
}
         
    }
}
