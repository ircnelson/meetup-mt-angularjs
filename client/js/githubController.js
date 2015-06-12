(function () {
    var app = angular.module('meetup');
    
    app.controller('GithubController', GithubController);

    GithubController.$inject = ["$scope", "$state"];
    
    function GithubController ($scope, $state) {

        $scope.username = 'ircnelson';

        $scope.goToProfile = function (username) {
            $state.go('app.github.user', { username: username });
        }

    }

})();