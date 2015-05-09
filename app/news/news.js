'use strict';

angular.module('app.news', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/news', {
            templateUrl: 'news/news.html',
            controller: 'NewsCtrl'
        });
    }])

    .controller('NewsCtrl', [function() {

    }]);