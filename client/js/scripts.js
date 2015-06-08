(function () {
    var app = angular.module('meetup', []);
    
    app.controller('MainController', MainController);
    
    function MainController ($scope) {
        
        /*
            troquei "soma" pra "somar" porque começou a me incomodar :s
        */
        
        $scope.somar = function (n, m) {
            return n + ' + ' + m + ' = ' + (n + m);
        };
    }

})();