angular.module('mbApp').factory('PostService', function($resource) {
    return $resource('/api/post/:id', {
        _id: "@id"
    }, {
        update: {
            method: 'PUT',
            isArray: false
        }
    });
});
