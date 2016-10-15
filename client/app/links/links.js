angular.module('shortly.links', [])

.controller('LinksController', function ($scope, links) {
  $scope.data = {};
  $scope.data.links = links;
})

.directive('shortenedLink', function() {
  return {
    template:
      '<img src="../../assets/redirect_icon.png"/>' + 
      '<span class="info">' + 
        '<a href={{link.code}} class="title">{{link.title}}</a>' +
        '<span class="original">{{link.url}}</span>' + 
        '<span class="visits">' + 
          '<span class="count">{{link.visits}}</span>' +
          'Visits' +
        '</span>' +
      '</span>'
  };
});
