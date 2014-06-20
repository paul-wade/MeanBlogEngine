'use strict';


// Declare app level module which depends on filters, and services
angular.module('mbApp', [
    'ngRoute',
    'mbApp.filters',
    'mbApp.services',
    'mbApp.directives',
    'mbApp.controllers'
]).
    config(['$routeProvider,$locationProvider', function($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/posts', {templateUrl: '/partials/post/posts', controller: 'mbPostsCtrl'});
        $routeProvider.when('/post', {templateUrl: '/partials/post/post', controller: 'mbPostCtrl'});

    }]);