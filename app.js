var app = angular.module('pullTab',['ngRoute']);

app.config(function($routeProvider,$locationProvider)
{

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });

    $routeProvider

        .when('/', {
            url: '/',
            templateUrl : 'views/pulltab.html',
            controller  : 'pullTabController',
        })

        .otherwise ({ redirectTo: '/' });

});