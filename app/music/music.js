'use strict';

angular.module('app.music', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/music', {
            templateUrl: 'music/music.html',
            controller: 'MusicCtrl'
        });
    }])

    .controller('MusicCtrl', [function() {

    }]);