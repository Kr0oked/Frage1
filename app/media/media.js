'use strict';

angular.module('app.media', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/media', {
            templateUrl: 'media/media.html',
            controller: 'MediaCtrl'
        });
    }])

    .controller('MediaCtrl', [function() {

    }]);