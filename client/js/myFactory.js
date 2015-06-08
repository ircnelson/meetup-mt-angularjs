(function () {
    var app = angular.module('meetup');
    
    app.factory('MyFactory', MyFactory);
    
    MyFactory.$inject = [];
    
    function MyFactory() {
        
        var me = this;
        me.name = 'My Factory';
        
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