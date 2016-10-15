angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(bool) {
    bool && Links.addOne($scope.link).then(function() {
      $scope.link.url = '';
    });
  };
  $scope.checkError = function(bool) {
    if (bool) {
      $scope.class = 'clean';
    } else {
      $scope.class = 'error';
    }
  };
});
