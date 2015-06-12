(function () {
    var app = angular.module('meetup');
    
    app.controller('FollowingController', FollowingController);

    FollowingController.$inject = ["$scope", "$stateParams", "GithubService"];
    
    function FollowingController ($scope, $stateParams, GithubService) {
        
        var username = $stateParams.username;
        
        $scope.title = "Following";
        
        GithubService.getFollowing(username).then(function (response) {
            $scope.users = response;
        });
    }

})();