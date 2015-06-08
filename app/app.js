'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute',
    'app.home',
    'app.news',
    'app.band',
    'app.music',
    'app.live',
    'app.media'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}])
.directive('backImg', function() {
    return function (scope, element, attrs) {
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url + ')',
            'background-size': 'cover'
        });
    };
});

// Set navigation items active when clicked
$('.nav li').on('click', function() {
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
});

$('.navbar-brand').on('click', function() {
    $('.nav li').find('.active').removeClass('active');
});
