(function () {
    var app = angular.module('meetup');
    
    app.controller('GithubController', GithubController);

    GithubController.$inject = ["$scope", "$http", "GITHUB"];
    
    function GithubController ($scope, $http, GITHUB) {

        $scope.username = 'ircnelson';

        $scope.search = function (username) {
            $http.get(GITHUB.apiUrl.concat("users/").concat(username)).then(function (response) {
                
                console.log(response);
                
                $scope.user = response.data;
            });
        }

    }

})();