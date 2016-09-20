/**
 * Created by tristanwellz on 6/20/16.
 */
angular.module('lunchAndLearnExample', [])
  .controller('StockDataController', function ($scope) {
    $scope.inputs= {
      inputname: 'Name please',
      inputpass: 'Password please',
      inputButton: 'Submit Me!'
    }

    $scope.inputsDos = {
      inputname: 'Login please',
      inputpass: 'Show me your password',
      inputButton:'Submit You!'
    }

  });

