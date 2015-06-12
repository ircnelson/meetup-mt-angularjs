(function () {
    var app = angular.module('meetup');
    
    app.controller('PublicRepositoryController', PublicRepositoryController);

    PublicRepositoryController.$inject = ["$scope", "$stateParams", "GithubService"];
    
    function PublicRepositoryController ($scope, $stateParams, GithubService) {
        
        var username = $stateParams.username;
        
        GithubService.getPublicRepositories(username).then(function (response) {
            $scope.repositories = response;
        });
    }

})();