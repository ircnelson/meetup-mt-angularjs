(function () {
    var app = angular.module('meetup');
    
    app.controller('FirstController', FirstController);

    FirstController.$inject = ["$scope", "MyFactory"];
    
    function FirstController ($scope, MyFactory) {
        
        $scope.somar = function (n, m) {
            return n + ' + ' + m + ' = ' + (n + m);
        };
        
        $scope.getName = function () {
            return MyFactory.getName();
        };
        
        $scope.setName = function (value) {
            return MyFactory.setName(value);
        };

    }

})();