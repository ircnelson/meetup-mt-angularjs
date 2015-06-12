(function () {
    var app = angular.module('meetup');
    
    app.service('GithubService', GithubService);

    GithubService.$inject = ["$http", "GITHUB"];
    
    function GithubService ($http, GITHUB) {
        
        var getProfile = function (username) {

            return $http.get(GITHUB.apiUrl.concat("users/").concat(username)).then(function (response) {
                return response.data;
            });

        };
        
        var getFollowers = function (username) {
            
            return $http.get(GITHUB.apiUrl.concat("users/").concat(username).concat('/followers')).then(function (response) {
                return response.data;
            });

        };
        
        var getFollowing = function (username) {
            
            return $http.get(GITHUB.apiUrl.concat("users/").concat(username).concat('/following')).then(function (response) {
                return response.data;
            });

        };
        
        var getPublicRepositories = function (username) {
           
            return $http.get(GITHUB.apiUrl.concat("users/").concat(username).concat('/repos')).then(function (response) {
                return response.data;
            });

        };
        
        return {
            getProfile: getProfile,
            getFollowers: getFollowers,
            getFollowing: getFollowing,
            getPublicRepositories: getPublicRepositories
        };
    }

})();