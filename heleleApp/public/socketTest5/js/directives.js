'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

// 'use strict';

// /* Directives */

// angular.module('myApp.directives', []).
//   directive('appVersion', function (version) {
//     return function(scope, elm, attrs) {
//       elm.text(version);
//     };
//   });
