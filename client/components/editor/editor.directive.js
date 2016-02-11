'use strict';

angular.module('wysiwygMeanEditorApp')
  .directive('editor', function () {
    return {
      templateUrl: 'components/editor/editor.html',
      restrict: 'E',
      scope: {},
      link: function (scope, element, attrs) {
      },
      controller: 'EditorController'
    };
});
