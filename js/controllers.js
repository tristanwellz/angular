/**
 * Created by tristanwellz on 6/20/16.
 */

var lunchAndLearnExample = angular.module('lunchAndLearnExample', []);


lunchAndLearnExample.controller('StockDataController', function ($scope,$http) {
  $scope.dataBindingExample= 'Hello data binding example one';
  $scope.isTodayTuesday = true;
  //Http request
  $scope.getStockData = function (){
    $http.get("mockphp/getTable.php").then(function(response){
      $scope.databaseresponse=response.data;
      console.log($scope.databaseresponse);
    });
  };

  $scope.toggleBoolean = function(){
    if($scope.isTodayTuesday === true){
      $scope.isTodayTuesday = false;
      return;
    }
    $scope.isTodayTuesday= true;
  }

});
