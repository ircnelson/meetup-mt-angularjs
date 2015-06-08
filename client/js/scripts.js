/*
    o escopo de código abaixo vai permanecer dentro da função e não terá acesso global
*/
(function () {
    var app = angular.module('meetup', []);
    
    app.controller('MainController', MainController);
    
    function MainController ($scope) {
        $scope.soma = function (n, m) {
            return n + ' + ' + m + ' = ' + (n + m);
        };
    }

})();