'use strict';

angular.module('app.live', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/live', {
            templateUrl: 'live/live.html',
            controller: 'LiveCtrl'
        });
    }])

    .controller('LiveCtrl', [function() {

    }]);