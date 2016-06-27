/**
 * Created by tristanwellz on 6/20/16.
 */
var lunchAndLearnExample = angular.module('lunchAndLearnExample', []);

lunchAndLearnExample.controller('StockDataController', function ($scope,$http) {

  $http.get("mockphp/getTable.php").then(function(response){
    $scope.databaseresponse=response.data;
    console.log($scope.databaseresponse);
  });

});
