/*
    criação de um módulo dentro do Angular
*/
var app = angular.module('meetup', []);

/*
    registrando o controller dentro do módulo
*/
app.controller('MainController', MainController);

function MainController ($scope) {
    $scope.soma = function (n, m) {
        return n + ' + ' + m + ' = ' + (n + m);
    };
}

/*
    dica: cuidado com o escopo do javascript. :-)
    
          do jeito que está o MainController está acessível de forma global... isso é realmente necessário?
          vamos melhorar isso...
*/