var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when('/reg', {
        templateUrl: 'html/reg.html'
    }).when('/login', {
        templateUrl: 'html/login.html'
    }).when('/home1', {
        templateUrl: 'html/home1.html'
    }).when('/profile', {
        templateUrl: 'html/profile.html'
    });
});

app.controller('myCtrl', function ($scope, $http, $location) {

    $scope.register = function () {
        var temp = {
            name: document.getElementById('username').value,
            password: document.getElementById('pass').value,
            email: document.getElementById('email').value,
            location: document.getElementById('loc').value,
            phone: document.getElementById('phone').value,
           type: document.getElementById('user_type').value
        }
        console.log(temp);

  
   
if(temp.name=='' || temp.password=='' || temp.email=='' || temp.location=='' || temp.phone=='' || temp.type==''  )
  {
alert('Make sure you fill all the details');

  }   
  else{

     $http.post('http://localhost:1963/data/' + JSON.stringify(temp)).then(function (req, res) {
            console.log(req.data);
            $scope.r = req.data;
        });


        $location.path('/login');
    }
}
    $scope.registerhere = function () {
        
        $location.path('/reg');
    }


    $scope.login = function () {
        $scope.show_applied_saved='';
        var temp1 = {
            name: document.getElementById('Lusername').value,
            password: document.getElementById('Lpassword').value

        }
       
        $http.post('http://localhost:1963/data1/' + JSON.stringify(temp1)).then(function (req, res) {
            if (req.data != '') {
                $scope.profile = req.data;
                localStorage.temp=JSON.stringify($scope.profile);
                $location.path('/profile');
            } else {
                alert('invalid credentials');
            }
        });

        
        
    }
    $scope.login1 = function () {
 
        $location.path('/login');
    }
    $scope.home = function () {
        $location.path('/home1');
    }
    $scope.post = function () {
        document.getElementById('b').style.display = "block";
        document.getElementById('a').style.display = "none"
    }


    $scope.search = function () {
        document.getElementById('a').style.display = "block";
        document.getElementById('b').style.display = "none";
        console.log($scope.savetemp);
        var searchtemp = {
            jobtitle: document.getElementById('title').value,
            keyword: document.getElementById('keys').value,
            location: document.getElementById('loctn').value

        }
        console.log(searchtemp);

        $http.post('http://localhost:1963/searchdata/' + JSON.stringify(searchtemp)).then(function (req, res) {
            if (req.data != '') {
                $scope.search1 = req.data;
                console.log($scope.search1);
              //  $location.path('/profile');
            } else {
                alert('job not available');
            }
        });
        

    }
    $scope.save = function () {
        var savetemp = {
            jobtitle: document.getElementById('job_title').value,
            description: document.getElementById('desc').value,
            keyword: document.getElementById('key').value,
            location: document.getElementById('locat').value
        }
        $scope.savetemp = savetemp;
        console.log(savetemp);
        $http.post('http://localhost:1963/savedata/' + JSON.stringify(savetemp)).then(function (req, res) {
            console.log(req.data);
            $scope.r = req.data;
        });
        document.getElementById('b').style.display="none";
        document.getElementById('lol').style.display="block";
   
    }


    $scope.reset = function () {
       document.getElementById('title').value="";
       document.getElementById('keys').value="";
       document.getElementById('loctn').value="";
       
      
      $scope.search_filter1=="";
       $scope.search_filter2=="";
       $scope.search_filter3=="";
       
console.log('Reset!!');

    } 


    $scope.prof = function() {
        console.log(localStorage.temp);
        if(localStorage.temp==''||localStorage.temp==undefined){
            $scope.profile=undefined;
        }
        else{
            $scope.profile=JSON.parse(localStorage.temp);
            console.log($scope.profile);
        }

if($scope.profile==undefined){
alert('You havent logged in!!');
$location.path('/home1');
}
else{
    console.log("loggin sucessful");
}

    }
    $scope.logout=function () {
        localStorage.temp='';     
        $location.path('/home1');
    }
$scope.apply=function(x,y){
   
    console.log(x);
   
    alert('Job applied')
    var applytemp={
        apply_descrip: x,
        username: y
    }
    
    $http.post('http://localhost:1963/applydata/' + JSON.stringify(applytemp)).then(function (req, res) {
        console.log(applytemp);
        $scope.apl = req.data;
    });

}
$scope.flag=function(x,y){
   
   
    console.log(x);
   
    alert('Job applied')
    var applytemp={
        flag_descrip: x,
        username: y
    }
    
    $http.post('http://localhost:1963/flagdata/' + JSON.stringify(applytemp)).then(function (req, res) {
        console.log(applytemp);
        $scope.apl = req.data;
    });
}
$scope.applied=function(x){
    $http.post('http://localhost:1963/showdata/'+ JSON.stringify(x)).then(function (req,res) {
        $scope.show_applied_saved=req.data;
    });
}
}); 