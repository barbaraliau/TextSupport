var app = angular.module('textSupport', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'home.html',
		controller: 'MainCtrl'
	})
	.state('support', {
		url: '/support',
		templateUrl: 'support.html',
		controller: 'SupportCtrl'
	})
	








});