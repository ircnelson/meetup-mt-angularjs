/*
    o escopo de código abaixo vai permanecer dentro da função e não terá acesso global
*/
(function () {
    var app = angular.module('meetup', []);
    
    app.controller('MainController', MainController);
    
    function MainController ($scope) {
        
        /*
            retirado a propriedade 'soma' do $scope que contém a chamada de uma função
            
            e a nossa view? vai quebrar!!
        */
        
        // $scope.soma = function (n, m) {
        //     return n + ' + ' + m + ' = ' + (n + m);
        // };
    }

})();