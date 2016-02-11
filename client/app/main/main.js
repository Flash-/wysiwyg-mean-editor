'use strict';

angular.module('wysiwygMeanEditorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      });
  });
