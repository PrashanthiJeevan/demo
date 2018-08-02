var app = angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/index.html'
    })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'controller/loginController'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            resolve: ['authService', function (authService) {
                return authService.checkStatus();
            }]
        }).when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            resolve: ['authService', function (authService) {
                return authService.checkStatus();
            }]
        });
});

app.factory('authService', function ($http, $location, $q) {
    return {
        'checkStatus': function () {
            var defer = $q.defer();
            $http.get('http://localhost:3000/check_usr_status').then(function (resp) {
                if (!resp.data.isLoggedIn) {
                    defer.reject();
                    $location.path('/');
                } else {
                    defer.resolve();
                }
            });
            return defer.promise;
        }
    };
});

app.controller('loginController', function ($scope, $http, $location) {
    $scope.login = function () {
        $http.post('http://localhost:3000/authenticate', $scope.loginform).then(function (resp) {
            if (resp.data.flg == 'success') {
                $location.path('/home');
            }
        });
    };
});

app.controller('homeController', function ($scope, $http, $location) {
});