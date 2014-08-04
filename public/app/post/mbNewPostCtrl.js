angular.module('mbApp').controller('mbNewPostCtrl', function ($scope, $sce, PostService) {

    $scope.title = "";
    $scope.body = "<span>test</span>";
    $scope.published = Date.now();
    $scope.slug = "";
    $scope.featured = false;
    $scope.updateId = function () {
        if ($scope.title) $scope.slug = $scope.title.replace(/ /g, '');
    };

    $scope.Submit = function () {
        var post = new PostService();
        post.id = $scope.id;
        post.title = $scope.Title;
        post.slug = $scope.id;
        post.featured = $scope.featured;
        post.body = $scope.Body;
        post.published = $scope.published;
        post.tags = "blah";
        post.$update();
    };

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;

    };

});