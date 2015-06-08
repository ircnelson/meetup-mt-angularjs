(function () {
    var app = angular.module('meetup', []);
    
    app.controller('MainController', MainController);
    
    MainController.$inject = ["$scope"];
    
    function MainController ($scope) {
        
        $scope.somar = function (n, m) {
            return n + ' + ' + m + ' = ' + (n + m);
        };

    }

})();