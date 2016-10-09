app.factory('OAuth2Service', function($http, $sessionStorage, SessionService) {
   
    var authService = {};
    
    authService.signIn = function(credentials) {
            return $http.post('http://cms.server/app_dev.php/oauth/v2/token', {
                grant_type:'password',
                client_id:'1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4',
                username:credentials.username,
                password:credentials.password,
            }).then(function (res) {
                 $sessionStorage.accessToken = res.data.access_token;
                 return authService.getAuthenticatedUser();
            }, function () {
            });
    };
    
    authService.getAuthenticatedUser = function() {
        return $http({method: 'GET', url: 'http://cms.server/auth/user', headers: {
            Authorization: 'Bearer ' + $sessionStorage.accessToken
        }}).then(function(res) {
            SessionService.create(res.data);
            return res.data;
        });
    }
    
    authService.isAuthenticated = function() {
        return !!SessionService.user;
    }
    
    authService.isAuthorized = function(authorizedRoles) {    
        
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        
        if (authService.isAuthenticated()) {
            for (var i = 0; i <= SessionService.user['roles'].length; i++) {
                if (authorizedRoles.indexOf(SessionService.user['roles'][i]) !== -1) {
                    return true;
                }
            }
        }
        
        return false;
    }
    return authService;
});