(function () {

    var app = angular.module('meetup', ['ngSanitize', 'ngNotifier']);
    
    app.config(Config);
    
    Config.$inject = ['$provide'];
    
    function Config($provide) {

        $provide.decorator('emailService', function($delegate) {

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