'use strict';

(function () {

var MainController = function ($scope, $http) {

  $scope.awesomeThings = [];
  $http.get('/api/things').then(response => {
    $scope.awesomeThings = response.data;
  });

  function addThing() {
    if ($scope.newThing) {
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    }
  }

  function deleteThing(thing) {
    $http.delete('/api/things/' + thing._id);
  }
};

angular.module('wysiwygMeanEditorApp')
  .controller('MainController', MainController);

})();
