/**
 * Created by tristanwellz on 9/19/16.
 */
angular.module('lunchAndLearnExample')
    .directive('lunchAndLearnDirective',function(){
      function link($scope){
        //Add functions here that will be used with the directive.
        $scope.onButtonCLick= function(){
          alert('Input 1 = ' + $scope.name);
          alert('Input 2 = ' + $scope.pass);
        };
      }
      return {
        link:link,
        scope:{
          variable: '=info',
          strVariable:'@string'
        },
        templateUrl: 'directives/directiveTemplate.html'
      };
    });