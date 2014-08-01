angular.module('mbApp').controller('mbNewPostCtrl', function($scope, $sce, PostService) {

    $scope.Title = "";
    $scope.Body = "<span>test</span";
    $scope.id = "";
    $scope.updateId = function() {
        $scope.id = "post/" + $scope.Title.replace(/ /g, '');
    } 

});
