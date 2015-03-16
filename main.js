var app = angular.module('theApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {

});

app.controller('TypeaheadCtrl', function($scope, $http) {

  $scope.personsData = null;

  $http.get('/data/cargografias-persons.json')
  .then(function(res){ 
    $scope.personsData = res.data;
  })

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