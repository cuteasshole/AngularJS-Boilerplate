;(function() {

  'use strict';
    
angular
    .module('boilerplate')
    .directive('test', testf);
    
function testf() {
    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'app/directives/main-nav.html'
    };

    return directiveDefinitionObject;
}
    
})();