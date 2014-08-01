angular.module('mbApp', ['ngResource', 'ngRoute','textAngular']);

angular.module('mbApp').config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider.when('/posts', { templateUrl: '/partials/post/posts', controller: 'mbPostsCtrl'});
    $routeProvider.when('/newpost', {templateUrl: '/partials/post/newpost',controller: 'mbNewPostCtrl'});
});


angular.module('mbApp').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {

        Console.log(evt);
    })
});
