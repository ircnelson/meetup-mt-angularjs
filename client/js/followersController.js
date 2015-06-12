(function () {
    var app = angular.module('meetup');
    
    app.controller('FollowersController', FollowersController);

    FollowersController.$inject = ["$scope", "$stateParams", "GithubService"];
    
    function FollowersController ($scope, $stateParams, GithubService) {
        
        var username = $stateParams.username;
        
        $scope.title = "Followers";
        
        GithubService.getFollowers(username).then(function (response) {
            $scope.users = response;
        });
    }

})();