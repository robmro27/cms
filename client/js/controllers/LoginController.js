app.controller("LoginController", function($scope, $rootScope, OAuth2Service, AUTH_EVENTS) {
    
    $scope.credentials = {
        username:'',
        password:'',
    }
    
    $scope.signIn = function(credentials) {
        
        OAuth2Service.signIn(credentials)
        .then(function(user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user); // from AppController
        })
        .then(function() {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    }
});