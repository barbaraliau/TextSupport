var app = angular.module('textSupport');

app.service('mainService', function($http, $q, $firebase){

	var firebaseUrl = "https://barbara-textsupport.firebaseio.com/";

	this.getMessages = function(){
		return $firebase(new Firebase(firebaseUrl + '/numbers'));
	}

	this.getServerMsg = function($q, $http){
		var deferred = $q.defer()
		$http({
			method: 'GET',
			url: 'http://localhost:9070'
		}).then(function(data){
			console.log(data)
		})


		return deferred.promise
	}


});