(function () {
    var app = angular.module('meetup');
    
    app.controller('ProfileController', ProfileController);

    ProfileController.$inject = ["$scope", "$stateParams", "$http", "GITHUB"];
    
    function ProfileController ($scope, $stateParams, $http, GITHUB) {
        
        console.log($stateParams);
        
        var username = $stateParams.username;
        
        $http.get(GITHUB.apiUrl.concat("users/").concat(username)).then(function (response) {
            $scope.user = response.data;
        });
    }

})();