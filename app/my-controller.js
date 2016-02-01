angular.module('myApp')
    .controller('myCtrl', ['$scope', 'Service', function($scope, Service) {

        var params = {
            param1: 'n',
            param2: 'm'
        };

        var data = {
            name: 'Iaroslav',
            age: '28'
        };

        var serializerDefault = true; // if true pa

        var service = new Service(params, data, serializerDefault);

        $scope.get = function() {
            service.get();
        };

        $scope.post = function() {
            service.post();
        };

        $scope.put = function() {
            service.put();
        };

        $scope.delete = function() {
            service.delete();
        };

    }]);