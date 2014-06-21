angular.module('mbApp').factory('PostService', function($resource){
     return $resource('/api/posts');
});
