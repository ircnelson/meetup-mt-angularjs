(function () {
    var app = angular.module('meetup');
    
    app.controller('SecondController', SecondController);
    
    SecondController.$inject = ["$scope", "MyFactory"];
    
    function SecondController ($scope, MyFactory) {
        
        $scope.getName = function () {
            return MyFactory.getName();
        };
        
        $scope.setName = function (value) {
            return MyFactory.setName(value);
        };

    }

})();