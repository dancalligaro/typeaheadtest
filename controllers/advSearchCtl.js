var app = angular.module('theApp');

app.controller('AdvancedCtl', function($scope, $http, $q, $timeout) {

  $scope.criterios = [{}];

  $scope.addAnother = function(){
    $scope.criterios.push({});
  }

  $scope.removeCrit = function(ix){
    $scope.criterios.splice(ix, 1);
  }

});