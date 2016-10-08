app.controller("LoginController", function($scope, $rootScope, OAuth2Service, AUTH_EVENTS) {
    
    $scope.credentials = {
        username:'',
        password:'',
    }
    
    $scope.signIn = function(credentials) {
        OAuth2Service.signIn(credentials)
        .then(function() {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        })
        .then(function() {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    }
});