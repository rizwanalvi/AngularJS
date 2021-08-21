let myApp = angular.module("mMobile",['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.when(
        '/home',{
            templateUrl: 'home.html',
            controller: 'HomeController'
        }
    ).when('/product',{
            templateUrl:'product.html',
            controller:'ProductController'
    }).otherwise({
        redirectTo:'/home'
    }
    );
}]);

myApp.controller('HomeController',function($scope){
$scope.msg= 'ok';

});
myApp.controller('ProductController',function($scope){
$scope.Heading = 'PRODUCT';

});