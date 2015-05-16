var app = angular.module('theApp');

app.controller('MultiFilterCtrl', function($scope, $http, $q, $timeout) {

	$scope.filters = [];

	$scope.addFilter = function(){
		$scope.filters.push({});
	}

});

