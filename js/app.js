var smApp = angular.module('smApp',['ui.bootstrap','ui.router']);

smApp.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'appController',
    })
    // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/404");

});
smApp.factory('favicoService', [
function() {
    var favico = new Favico({
        animation : 'fade'
    });

    var badge = function(num) {
        favico.badge(num);
    };
    var reset = function() {
        favico.reset();
    };

    return {
        badge : badge,
        reset : reset
    };
}]);

//controller
smApp.controller('appController', function($scope, favicoService){

	$scope.count = 3;
    //badge +1
    $scope.plusOne = function() {
        $scope.count = $scope.count + 1;
        favicoService.badge($scope.count);
    };
    //badge -1
    $scope.minusOne = function() {
        $scope.count = ($scope.count - 1 < 0) ? 0 : ($scope.count - 1);
        favicoService.badge($scope.count);
    };
    //badge reset (count will be preserved)
    $scope.reset = function() {
        favicoService.reset();
    };
    //init value
    favicoService.badge($scope.count);
	
});