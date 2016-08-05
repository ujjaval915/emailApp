var app = angular.module("iisEmail",['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise("/");
        var primary = {
            name:"primary",
            url:"/",
            templateUrl:"app/partials/emailView.html"
            //controller:"emailViewCtrl"
        };
        var settings ={
            name:"settings",
            url:"/",
            templateUrl:"app/partials/settings.html"
            //controller:"emailViewCtrl"
        };
        $stateProvider.state('default',primary);
        $stateProvider.state('settings',settings);
    }]);