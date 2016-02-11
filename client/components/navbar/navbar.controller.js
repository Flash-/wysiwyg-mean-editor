'use strict';

var NavbarController = function ($scope) {
  $scope.menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  $scope.isCollapsed = true;
};

angular.module('wysiwygMeanEditorApp')
  .controller('NavbarController', NavbarController);
