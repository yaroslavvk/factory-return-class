angular.module('myApp')
    .factory('Service', ['$http', '$log', '$resource', function($http, $log, $resource) {

        function Resource(params, data, serializerDefault) {
            this.url = 'https://aqueous-reaches-8130.herokuapp.com/check-email/'; //url for example
            this.params = params;
            this.data = data;
            this.serializerDefault = serializerDefault;
        }

        // define instance methods
        Resource.prototype.get = function() {
            if (this.serializerDefault) {
                $http.get(this.url, {
                    params: this.params,
                }).then(function successCallback(response) {
                    $log.info('success');
                    $log.info(response);
                }, function errorCallback(response) {
                    $log.info('error');
                    $log.info(response);
                });
            } else {
                var ResClass = $resource(this.url + 'param1/:param1/param2/:param2', {
                    param1: '@param1',
                    param2: '@param2'
                });
                var res = ResClass.get(this.params, function(response) {
                    $log.info('success');
                    $log.info(response);
                }, function(response) {
                    $log.info('error');
                    $log.info(response);
                });
            }
        };

        Resource.prototype.post = function() {
            $http.post(this.url, {
                data: this.data,
                params: this.params
            }).then(function successCallback(response) {
                $log.info('success');
                $log.info(response);
            }, function errorCallback(response) {
                $log.info('error');
                $log.info(response);
            });
        };

        Resource.prototype.put = function() {
            $http.put(this.url, {
                data: this.data,
                params: this.params
            }).then(function successCallback(response) {
                $log.info('success');
                $log.info(response);
            }, function errorCallback(response) {
                $log.info('error');
                $log.info(response);
            });
        };

        Resource.prototype.delete = function() {
            $http.delete(this.url, {
                params: this.params
            }).then(function successCallback(response) {
                $log.info('success');
                $log.info(response);
            }, function errorCallback(response) {
                $log.info('error');
                $log.info(response);
            });
        };

        return Resource;
    }]);