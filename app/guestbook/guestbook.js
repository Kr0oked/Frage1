'use strict';

angular.module('app.guestbook', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/guestbook', {
            templateUrl: 'guestbook/guestbook.html',
            controller: 'GuestbookCtrl'
        });
    }])

    .controller('GuestbookCtrl', [function() {

    }]);