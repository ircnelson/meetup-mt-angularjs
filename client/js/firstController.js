(function () {
    var app = angular.module('meetup');
    
    app.controller('FirstController', FirstController);

    FirstController.$inject = ["$scope", "MyService"];
    
    function FirstController ($scope, MyService) {
        
        $scope.somar = function (n, m) {
            return n + ' + ' + m + ' = ' + (n + m);
        };
        
        $scope.getName = function () {
            return MyService.getName();
        };
        
        $scope.setName = function (value) {
            return MyService.setName(value);
        };

    }
    
    
})();