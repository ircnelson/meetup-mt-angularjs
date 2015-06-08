(function () {

    /*
        apenas 'Provider' estará disponível em fase de configuração no Angular, enquanto Service e Factory não estarão
    */
    
    var app = angular.module('meetup');
    
    app.provider('MyProvider', MyProvider);
    
    MyProvider.$inject = [];
    
    function MyProvider() {
        
        var name = 'My MyProvider';
        var message = 'Hi!';
        
        this.setHelloMessage = function (value) {
            message = value;
        };
        
        this.$get = function () {
            
            var setName = function (value) {
                name = value;
            };
            
            var getName = function () {
                return message + ' ' + name;
            };
            
            return {
                getName: getName,
                setName: setName
            };
        }
    }
})();