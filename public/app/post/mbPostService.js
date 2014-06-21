angular.module('mbApp').factory('PostService', function($resource){
     return $resource('http://localhost:3003/api/posts');
});
