(function() {
	angular.module('myApp', ['ngResource']);
	angular.module('myApp')
		.config(['$httpProvider', function($httpProvider) {
			$httpProvider.interceptors.push(['$log', function($log) {
				return {
					'request': function(config) {
						$log.info('interseptor on request');
						$log.info(config);
					},
					'response': function(response) {
						$log.info('interseptor on response');
						$log.info(response);
					}
				};
			}]);
		}]);
})();