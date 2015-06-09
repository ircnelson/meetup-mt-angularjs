(function () {
    var app = angular.module('ngNotifier', []);
    
    app.service('emailService', function() {
        this.email = "";
        
        this.setContent = function(content) {
            this.email = content;
        };
        
        this.send = function(recipient) {
            return 'sending "' + this.email + '" to ' + recipient;
        };
    });

})();