app.factory('AuthResolver', function($q, $rootScope, $state, OAuth2Service, AUTH_EVENTS) {
   return {
       resolve: function(authorizedRoles) {
           var defer = $q.defer();
            OAuth2Service.getAuthenticatedUser().then(function(user) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, user);
                if (authorizedRoles.length && !OAuth2Service.isAuthorized(authorizedRoles)) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                }
                defer.resolve();
            }, function() {
                defer.reject();
                $state.go('login');
            });
            return defer.promise;
       }
   } 
});