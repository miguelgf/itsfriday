angular.module('itsfriday.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ConfigCtrl', function($scope) {
  $scope.settings = {
    enableNotifations: true
  };
});
