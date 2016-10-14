angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  Links.getAll().then(function(links) {
    $scope.data.links = links;
  }); 

  // Links.addOne({ url: 'http://cnn.com' }).then(function(links) {
  //   $scope.data.links = links.data;
  // });

});
