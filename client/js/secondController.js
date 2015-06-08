(function () {
    var app = angular.module('meetup');
    
    app.controller('SecondController', SecondController);
    
    SecondController.$inject = ["$scope", "MyProvider"];
    
    function SecondController ($scope, MyProvider) {
        
        $scope.getName = function () {
            return MyProvider.getName();
        };
        
        $scope.setName = function (value) {
            return MyProvider.setName(value);
        };

    }

})();