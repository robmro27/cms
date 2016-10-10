app.factory('httpBuffer', ['$injector', function($injector) {
    
    var $http;
    var buffer = {};

    function retryHttpRequest(config, deferred) {
      function successCallback(response) {
        deferred.resolve(response);
      }
      function errorCallback(response) {
        deferred.reject(response);
      }
      $http = $http || $injector.get('$http');
      $http(config).then(successCallback, errorCallback);
    }

    return {
      add: function(config, deferred) {
        return buffer = {
          config: config,
          deferred: deferred
        };
      },
      retry: function(token) {
          buffer.config.headers["Authorization"] = 'Bearer ' + token;
          retryHttpRequest(buffer.config, buffer.deferred);
      }
    }
      
}]);


