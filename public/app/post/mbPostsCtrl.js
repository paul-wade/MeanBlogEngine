'use strict';

/* Controllers */

angular.module('mbApp').controller('mbPostsCtrl',  function($scope,PostService) {

    PostService.query(function(response){
        $scope.posts = response;
    });

});
