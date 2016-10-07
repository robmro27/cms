app.factory('OAuth2Service', function($http, SessionService) {
   
    var authService = {};
    
    authService.signIn = function(credentials) {
            return $http.post('http://cms.server/app_dev.php/oauth/v2/token', {
                grant_type:'password',
                client_id:'1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4',
                username:credentials.username,
                password:credentials.password,
            }).then(function (res) {
                 SessionService.create(res.data.access_token);
                 return authService.getAuthenticatedUser();
            }, function () {
            });
    };
    
    authService.getAuthenticatedUser = function() {
        return $http({method: 'GET', url: 'http://cms.server', headers: {
            Authorization: 'Bearer ' + SessionService.accessToken
        }}).then(function(res) {
            SessionService.setUser(res);
            return res;
        });
    }
    
    authService.isAuthenticated = function() {
        return !!SessionService.accessToken;
    }
    
    authService.isAuthorized = function(authorizedRoles) {
        
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
                authorizedRoles.indexOf(SessionService.user.role) !== -1);
    }
        
    return authService;
    
});