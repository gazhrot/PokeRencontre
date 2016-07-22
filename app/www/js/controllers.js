angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('pokeGoChatCtrl', function($scope, $http, $location, $ionicPopup) {

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
   
.controller('inscriptionCtrl', function($scope, $http, $ionicPopup) {
	
	$scope.inscription = function(login, password) {

		var data = {
			email: login,
			password: password
		};

		$http.post('http://localhost:3000/user/inscription', data)
		.success(function(data) {

			if ( data.error === true) {
				console.log(data);

				var pop = $ionicPopup.alert({
		           title: 'Inscription',
		           template: "Inscription Valide"
		         });
			}else{
				var pop = $ionicPopup.alert({
		           title: 'Inscription',
		           template: data.data
		         });
			}
				;
		}, function(err) {
			var pop = $ionicPopup.alert({
	           title: 'Inscription',
	           template: err.error
	         });
		})
	}
})