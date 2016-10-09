var app = angular.module("app",["ui.router","ngStorage"]);

app.config(function($httpProvider,$stateProvider, $urlRouterProvider, USER_ROLES) {
    $httpProvider.defaults.useXDomain = true
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        .state("login", {
           url: '/login', 
           templateUrl: "templates/login.html",
           controller: "LoginController",
           data: {
               authorizedRoles: []
           }
        })
        .state("admin", {
            url: '/admin',
            templateUrl: "templates/admin.html",
            controller: "AdminController",
            resolve: {
                auth: function resolveAuthentication(AuthResolver) {
                    return AuthResolver.resolve([USER_ROLES.ROLE_ADMIN]);
                }
            }
        })
        ;
});

app.run(function(OAuth2Service, $rootScope, USER_ROLES, AUTH_EVENTS) {
    
   $rootScope.currentUser = null; 
   $rootScope.userRoles = USER_ROLES;
   $rootScope.isAuthorized = OAuth2Service.isAuthorized;
   
   $rootScope.$on(AUTH_EVENTS.loginSuccess, function (event, user) {
        $rootScope.currentUser = user;
    });
    
});

app.controller("AppController", function() {
    ;
});

/*
######################### RESOLVER ON STATE CHANGE ##########################
#                                                                           # 
#############################################################################
$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    if (!toState.resolve) { toState.resolve = {} };
    toState.resolve.authRoles = [
        '$q',
        function($q) {
            var defer = $q.defer();
            $http.makeSomeAPICallOrWhatever().then(function (resp) {
                if(resp = thisOrThat) {
                    doSomeThingsHere();
                    defer.resolve();
                } else {
                    doOtherThingsHere();
                    defer.resolve();
                }
            });
            return defer.promise;
        }
    ]
});
*/