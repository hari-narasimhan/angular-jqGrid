(function() {
  'use strict';

  angular
    .module('angularJqGrid')
    .directive('adxJqGrid', adxJqGrid);

  /** @ngInject */
  function adxJqGrid() {
    var directive = {
      restrict: 'E',
      //templateUrl: 'app/components/adxJqGrid/adxJqGrid.html',
      scope: {
          config: '=',
          data: '='
      },
      link : function (scope, element, attrs) {
        
        var table;
        
        scope.$watch('config', function (newValue) {
          console.log('config fired');
          element.children().empty();
          table = angular.element('<table></table>');
          element.append(table);
          $(table).jqGrid(newValue);
        });
        
        scope.$watch('data', function (newValue, oldValue) {
          var i;
          console.log('data fired');
          for (i = oldValue.length - 1; i >= 0; i--) {
            $(table).jqGrid('delRowData', i);
          }
          for (i = 0; i < newValue.length; i++) {
            $(table).jqGrid('addRowData', i, newValue[i]);
          }
        });
      },
      controller: GridController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function GridController(moment) {
      var vm = this;
      // ADD YOUR CONTROLLER METHODS HERE
    }
  }

})();
