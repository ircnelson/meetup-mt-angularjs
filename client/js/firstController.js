(function () {
    var app = angular.module('meetup');
    
    app.controller('FirstController', FirstController);

    FirstController.$inject = ["$scope", "emailService"];
    
    function FirstController ($scope, emailService) {
        
        $scope.destinatario = "dev@meetup-mt.com.br";
        $scope.conteudo = "Meetup - MT! - o Alvaro vai tirar uma foto da galera com pau de selfie! :-)";
        
        $scope.enviarEmail = function (conteudo, destinatario, assinatura) {
            emailService.setContent(conteudo);
            $scope.resultado = emailService.sendWithSignature(destinatario, assinatura);
        };

    }

})();