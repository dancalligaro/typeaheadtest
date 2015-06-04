var app = angular.module('theApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope, $modal, $log) {

	$scope.showAdvanced = true;

	$scope.openAdvanced = function (size) {
		$scope.showAdvanced = !$scope.showAdvanced;
	};


});

