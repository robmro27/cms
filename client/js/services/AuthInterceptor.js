app.factory('AuthInterceptor', function($rootScope, $q, AUTH_EVENTS, httpBuffer) {
        return {
            responseError: function (response) {
                
                var config = response.config || {};
                var deferred = $q.defer();
                httpBuffer.add(config, deferred);
                
                switch (response.status) {
                    case 401:
                      $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                      break;
                    case 403:
                      $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                      break;
                    case 419:
                      $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout);
                      break;
                    case 440:
                      $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout);
                      break;  
                }
                return $q.reject(response);
            }
        }
    }   
); 