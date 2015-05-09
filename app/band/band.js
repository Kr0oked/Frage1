'use strict';

angular.module('app.band', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/band', {
            templateUrl: 'band/band.html',
            controller: 'BandCtrl'
        });
    }])

    .controller('BandCtrl', [function() {

    }]);