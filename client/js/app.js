(function () {
    
    var app = angular.module('meetup', []);
    
    app.config(Config);
    
    /*
        convenção usada para providers: sufixo 'Provider'
        lembrando que apenas 'Provider' estará disponível nessa fase de configuração, enquanto Service e Factory não estarão
    */
    
    Config.$inject = ['MyProviderProvider'];
    
    function Config (MyProviderProvider) {
        MyProviderProvider.setHelloMessage("Olá");
    }
    
})();