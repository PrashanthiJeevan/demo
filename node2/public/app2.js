var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $scope.abc = function () {
        $http.get('http://localhost:3000/a').then(function (data) {
            $scope.disp = data.data;
            console.log('You clicked');
        });
        //$scope.abc();
    };
});