(function () {
    var app = angular.module('meetup', ['ui.router', 'ui.bootstrap']);
    
    app.config(Config);
    
    app.constant('GITHUB', {
    	apiUrl: "https://api.github.com/"
    });
    
    Config.$inject = ["$stateProvider", "$urlRouterProvider"];
    
    function Config ($stateProvider, $urlRouterProvider) {
    	
    	$urlRouterProvider.otherwise("/github");
    	
    	$stateProvider
	        .state('app', {
	            url: "/home",
	            abstract: true,
	            views: {
	            	'search': {
	            		template: "<input placeholder=\"Username\" type=\"text\" ng-model=\"username\" /> <button ng-click=\"goToProfile(username)\">User profile</button>",
	            		controller : "GithubController"
	            	}
	            }
	        })

	        .state('app.github', {
	            url: ""
	        })
	        
	        .state('app.github.user', {
	        	url: "/user/:username",
	        	views: {
	        		'content@': {
	        			templateUrl: "templates/profile.html",
	        			controller: "ProfileController"
	        		}
        		}
	        })
	        
	        .state('app.github.user.followers', {
	        	url: "/followers",
	        	views: {
	        		'more-info': {
	        			templateUrl: "templates/users.html",
	        			controller: "FollowersController"
	        		}
        		}
	        })
	        
	        .state('app.github.user.following', {
	        	url: "/following",
	        	views: {
	        		'more-info': {
	        			templateUrl: "templates/users.html",
	        			controller: "FollowingController"
	        		}
        		}
	        })
	        
	        .state('app.github.user.public_repos', {
	        	url: "/public_repos",
	        	views: {
	        		'more-info': {
	        			templateUrl: "templates/repositories.html",
	        			controller: "PublicRepositoryController"
	        		}
        		}
	        });
    }
})();