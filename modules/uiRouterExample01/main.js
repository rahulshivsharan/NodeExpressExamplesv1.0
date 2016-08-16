angular.module("routingExample",["ui.router"]);
angular.module("routingExample").controller("ctrl",ctrl);
angular.module("routingExample").controller("moviesCtrl",moviesCtrl);
angular.module("routingExample").config(routeConfig);



routeConfig.$inject = ["$stateProvider","$urlRouterProvider","$locationProvider"];
ctrl.$inject = ["$scope",'$state'];
moviesCtrl.$inject = ["$scope"];
routeConfig.$inject = ["$stateProvider","$urlRouterProvider","$locationProvider"];

function routeConfig($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider.state("movielist",{
		url: "/movielist",
		templateUrl : "list.html",
		controller : "moviesCtrl",
		controllerAs : "vm"
	});	
}

function ctrl($scope,$state){
	var vm = this;
	vm.title = "Listing of Movies";
	$state.go("movielist");	
}

function moviesCtrl($scope){
	var vm = this;
	vm.movies = [];
	vm.movies.push("Saving Private Ryan");
	vm.movies.push("Sight out");
	vm.movies.push("Nine");
	vm.movies.push("Man on the moon");
	vm.movies.push("Orange County");

	
}