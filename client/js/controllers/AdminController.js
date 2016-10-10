app.controller("AdminController", function($scope, $http, $sessionStorage) {
    
    $scope.test = function() {
        $http({method: 'GET', url: 'http://cms.server/auth/user', headers: {
            Authorization: 'Bearer ' + $sessionStorage.accessToken
        }}).then(function(res) {
            return res.data;
        });
    }
    
});