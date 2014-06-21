angular.module('mbApp', ['ngResource', 'ngRoute']);

angular.module('mbApp').config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider.when('/posts', { templateUrl: '/partials/post/posts', controller: 'mbPostsCtrl'});

});


angular.module('mbApp').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {

        Console.log(evt);
    })
});
