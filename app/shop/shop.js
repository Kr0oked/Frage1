'use strict';

angular.module('app.shop', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/shop', {
            templateUrl: 'shop/shop.html',
            controller: 'ShopCtrl'
        });
    }])

    .controller('ShopCtrl', [function() {

    }]);