var app = angular.module("app",["ngRoute"]);

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

app.controller("AppController", function($scope, USER_ROLES, AuthService) {
   
   $scope.currentUser = null;
   $scope.userRoles = USER_ROLES;
   $scope.isAuthorized = AuthService.isAuthorized;
   
   $scope.setCurrentUser = function(user) {
       $scope.currentUser = user;
   }
   
});