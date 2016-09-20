/**
 * Created by tristanwellz on 9/19/16.
 */
angular.module('lunchAndLearnExample')
    .directive('lunchAndLearnDirective',function(){

      return {
        restrict: 'E',
        scope:{
          variable: '=info',
          strVariable:'@string'
        },
        templateUrl: 'directives/directiveTemplate.html'
      };
    });