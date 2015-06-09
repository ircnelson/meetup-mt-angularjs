(function () {
    var app = angular.module('meetup');
    
    app.filter('prettyHtmlMail', function() {
        return function(input) {
            
            if (input === undefined) return;
            
            function toPretty (str, conteudo, destinatario, assinatura) {
                
                return "<strong>" + conteudo + "</strong> " + "<i>" + destinatario + "</i>" + (assinatura ? "<small>" + assinatura + "</small>" : "");
            }
            
            var regexPattern = /email enviado: (.*) para (.*)( - (.*))?/g;
            
            var output = input.replace(regexPattern, toPretty);
            
            return output;
        };
    });

})();