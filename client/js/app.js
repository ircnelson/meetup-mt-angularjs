(function () {

    /*
        declaro 'ngSanitize' e 'ngNotifier' como dependência do meu módulo 'meetup'
    */
    
    var app = angular.module('meetup', ['ngSanitize', 'ngNotifier']);
    
    app.config(Config);
    
    Config.$inject = ['$provide'];
    
    function Config($provide) {
        
        /*
            dentro do módulo 'ngNotifier' possui o service 'emailService'
        */
        
        $provide.decorator('emailService', function($delegate) {

			/*
				$delegate representa 'emailService' 
			*/

            $delegate.sendWithSignature = function(recipient, signature) {
            	
            	var output = 'email enviado: "' + this.email + '" para ' + recipient;
            	
            	if (signature) {
                	output += ' - ' + signature;
                }
            	
                return output;

            };
        
			return $delegate;
      });
    }

})();