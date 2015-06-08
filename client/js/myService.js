(function () {
    var app = angular.module('meetup');
    
    app.service('MyService', MyService);
    
    MyService.$inject = [];
    
    function MyService() {
        
        var me = this;
        me.name = 'My Service';
        
        var getName = function () {
            return me.name;
        };
        
        var setName = function (value) {
            me.name = value;
        };
        
        return {
            setName: setName,
            getName: getName
        };
    }
})();