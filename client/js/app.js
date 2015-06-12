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
	            url: "/github",
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
	        });
    }
})();