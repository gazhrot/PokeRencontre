angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('pokeGoChatCtrl', function($scope, $http, $location) {

	$scope.connection = function(login, password) {

		var data = {
			email: login,
			password: password
		};

		$http.post('http://localhost:3000/user/connection', data)
		.success(function(data) {
			$location.path('/room');
		}, function(err) {
			$scope.connection_error = data.error;
			console.log(err.error);
		})
	}
})
   
.controller('inscriptionCtrl', function($scope, $http) {
	
	$scope.inscription = function(login, password) {

		var data = {
			email: login,
			password: password
		};

		$http.post('http://localhost:3000/user/inscription', data)
		.success(function(data) {
			$scope.inscription_error = data.error;
		}, function(err) {
			console.log(err.error);
		})
	}
})