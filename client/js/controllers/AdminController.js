app.controller("AdminController", function($http) {
    $http.get('http://cms.server/')
    .then(function (response) {
        console.log(response);
    }, function () {
       ;
    });
});