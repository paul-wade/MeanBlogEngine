'use strict';

/* Controllers */

angular.module('mbApp').controller('mbPostsCtrl', function ($scope, $sce, PostService) {

    PostService.query(function(response){

        //sanitize post body to display html on page.
        for (var i=0; i<response.length;i++) {
            response[i].body = $sce.trustAsHtml(response[i].body);
        }

        $scope.posts = response;

    });

});
