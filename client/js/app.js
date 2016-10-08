var app = angular.module("app",["ngRoute","ngStorage"]);

app.config(function($httpProvider,$routeProvider) {
    $httpProvider.defaults.useXDomain = true
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
        .when("/login", {
           templateUrl: "templates/login.html",
           controller: "LoginController"
        })
        .when("/admin", {
            templateUrl: "templates/admin.html",
            controller: "AdminController",
        })
        .otherwise({redirectTo:'/login'});
});

app.run(function(OAuth2Service, $rootScope, USER_ROLES) {
   OAuth2Service.getAuthenticatedUser().then(function(user) {
       $rootScope.currentUser = user;
       $rootScope.userRoles = USER_ROLES;
       $rootScope.isAuthorized = OAuth2Service.isAuthorized;
   });
});

app.controller("AppController", function() {
    ;
});