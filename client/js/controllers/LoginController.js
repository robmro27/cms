app.controller("LoginController", function($scope, $rootScope, $state, OAuth2Service, AUTH_EVENTS) {
    
    $scope.credentials = {
        username:'',
        password:'',
    }
    
    $scope.signIn = function(credentials) {
        OAuth2Service.signIn(credentials)
        .then(function(user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, user);
            $state.go('admin');
        })
        .then(function() {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    }
});