(function() {
  'use strict';

  angular
    .module('angularJqGrid')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
