angular.module('shortly.links', [])

.controller('LinksController', function ($scope, links) {
  $scope.data = {};
  $scope.data.links = links;
})

.directive('shortenedLink', function() {
  return {
    template:
      '<img src="{{link.url}}/favicon.ico"/>' + 
      '<span class="info">' + 
        '<a href={{link.code}} class="title">{{link.title}}</a><br>' +
        '<span class="original">{{link.url}}</span>' + 
        '<span class="visits">' + 
          '<span class="count">{{link.visits}}</span>' +
          'Visits' +
        '</span>' +
      '</span>'
  };
});
