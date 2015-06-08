(function () {
    var app = angular.module('meetup');
    
    app.controller('SecondController', SecondController);
    
    SecondController.$inject = ["$scope", "MyService"];
    
    function SecondController ($scope, MyService) {
        
        $scope.getName = function () {
            return MyService.getName();
        };
        
        $scope.setName = function (value) {
            return MyService.setName(value);
        };

    }
    
})();