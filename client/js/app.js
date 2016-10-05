// https://www.youtube.com/watch?v=-gHHcv3Xy9s
var app = angular.module("app",["ngRoute"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("login", {
           url: "/login", 
           templateUrl: "templates/login.html",
           controller: "LoginCOntroller"
        })
        .state("secure", {
            url: "/secure",
            templateUrl: "templates/secure.html",
            controller: "SecureController",
        });
});