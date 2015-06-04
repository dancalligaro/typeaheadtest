var app = angular.module('theApp');

app.controller('AdvancedCtl', function($scope, $http, $q, $timeout) {

  $scope.criterios = [[{}]];

  $scope.addCriterio = function(){
    $scope.criterios.push([{}]);
  }

  $scope.addSubCriterio = function(parentIx){
    $scope.criterios[parentIx].push({});
  }

  $scope.removeCriterio = function(ix){
    $scope.criterios.splice(ix, 1);
  }

  $scope.removeSubCriterio = function(parentIx, ix){
    $scope.criterios[parentIx].splice(ix, 1);
  }

});