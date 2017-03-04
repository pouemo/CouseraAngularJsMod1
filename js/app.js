
(function () {
  'use strict';
  angular.module('LunchCheck', [])

   .controller("LunchCheckController", function ($scope) {
     $scope.message = "";
     $scope.textbox = "";

     /* this function show message */
      $scope.showMessage = function () {
        var numberItem = $scope.numberItems($scope.textbox) ;
        if ( (numberItem<= 3) && (numberItem >0)) {
          $scope.message = "Enjoy!";
        }else if ( numberItem > 3) {
            $scope.message = "Too much!";
        }else {
          $scope.message = "Please enter data first";
        }

      }

     /* this function cont number of item user enter in textbox*/
      $scope.numberItems = function (myString) {

        var splits = myString.split(',');
        var count = 0;
        for (var i = 0; i < splits.length; i++) {
          var token = splits[i].toString().trim();
          if (token.length > 0) {
            count = count +1;
          }
        }
        console.log("le number of iteme is "+count);
        return count;
      }
   });
})();
