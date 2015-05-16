var app = angular.module('theApp');

app.controller('InnerFilterCtrl', function($scope, $log) {



  $scope.types = [
  {
    caption: "Fecha Desde", 
    type: "from"
  },
  {
    caption: "Fecha Hasta", 
    type: "to"
  },
  {
    caption: "Cargo", 
    type: "cargo"
  },
  ]

  $scope.select = function(type){
    $scope.type = type;
  }

  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };


});


