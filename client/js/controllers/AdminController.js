app.controller("AdminController", function($http, $sessionStorage) {
    $http({method: 'GET', url: 'http://cms.server', headers: {
            Authorization: 'Bearer ' + $sessionStorage.accessToken
    }})
    .then(function (response) {
        
    }, function () {
       ;
    });
});