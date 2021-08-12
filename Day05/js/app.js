let CrudApp = angular.module("mCrud",[]);
CrudApp.controller("CrudController",function($scope){
    $scope.item={};
    $scope.items = [{product:"Milk",quantity:25},{product:"Soap",quantity:25}];
   
    $scope.addItem = function(){
        $scope.items.push([{product:$scope.item.product,
            quantity:$scope.item.quantity}]);
        $scope.item.product='';
        $scope.item.quantity='';
    }
    $scope.editItem = function(index){
        $scope.item = $scope.items[index];
        $scope.edit = true;
    }
    $scope.applyChange = function(index){
        $scope.item={};
        $scope.edit = false;
        
    }
    $scope.deleteItem=function(index){
        $scope.items.splice(index,1);

    }
})