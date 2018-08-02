var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $scope.click = function () {
        //var det = {
        //    url: $scope.url
        //}
        console.log('You clicked');
        $http.get("https://www.reddit.com/r/aww.json").then(function (data) {
            console.log(data.data);
            $scope.users = data.data;
        });
    }
});
