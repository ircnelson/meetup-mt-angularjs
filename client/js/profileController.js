(function () {
    var app = angular.module('meetup');
    
    app.controller('ProfileController', ProfileController);

    ProfileController.$inject = ["$scope", "$state", "$stateParams", "GithubService"];
    
    function ProfileController ($scope, $state, $stateParams, GithubService) {
        
        var username = $stateParams.username;
        
        $scope.$state = $state;
        
        GithubService.getProfile(username).then(function (response) {
            $scope.user = response;
        });
    }

})();