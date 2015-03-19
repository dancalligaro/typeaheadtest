var app = angular.module('theApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {

});

app.controller('TypeaheadCtrl', function($scope, $http, $q, $timeout) {

  $scope.selected = [];

  $scope.personsData = null;

  $http.get('http://v3.cargografias.org/js/datasets/gz/cargografias-persons.json')
  .then(function(res){ 
    $scope.personsData = res.data;
  })

  $scope.removeThis = function(ix){
    $scope.selected.splice(ix, 1);
  }

  var theTo;
  var isResolved = true;
  var theDeferred;

  $scope.getPerson = function(val){
    if(isResolved){
      isResolved = false;
      theDeferred = $q.defer();
    }
    $timeout.cancel(theTo);
    theTo = $timeout(function(){ 
      var ucaseFilter = val.toLowerCase();
      isResolved = true;
      var results = $scope.personsData.filter(function(item){ 
        return item.name.toLowerCase().indexOf(ucaseFilter) > -1; 
      });
      theDeferred.resolve( results ); 
    }, 300);
    return theDeferred.promise;
  };

  $scope.oneSelected = function(){
    console.log("Selected: ", $scope.asyncSelected2.name)
    $scope.selected.push($scope.asyncSelected2);
    $timeout(function(){ $scope.asyncSelected2 = null; },500)
  }

  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };

});