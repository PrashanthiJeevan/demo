var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $scope.abc = function () {
        $http.post('http://localhost:3000/abc/'+$scope.some).then(function (data) {
            $scope.disp = data.data;
            console.log('You clicked');
        });
        //$scope.abc();
    };
});