
var headyApp = angular.module("headyApp", ["ngRoute"]);
headyApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
         $routeProvider
        .when("/details", {
            templateUrl: "Templates/details.htm",
            controller: "detailsController"
        })
        .when("/description", {
            templateUrl: "Templates/description_1.htm",
            controller: "descriptionController"
        })
        .when("/reviews", {
            templateUrl: "/Templates/reviews.htm",
            controller: "reviewsController"
        })
        .when("/related", {
            templateUrl: "/Templates/custom_tab.htm",
            controller: "relatedController"
        })
        .otherwise({
            redirectTo:"/Templates/details.htm"
        });
         $locationProvider.html5mode(true);
}]);

headyApp.controller("detailsController",['$scope', function ($scope) {
    $scope.message = "I love Paris";
}]);
headyApp.controller("descriptionController",['$scope', function ($scope) {
    $scope.message = "I love Paris";
}]);
headyApp.controller("reviewsController",['$scope', function ($scope) {
    $scope.message = "Reviews Page";
}]);
headyApp.controller("relatedController",['$scope', function ($scope) {
    $scope.message = "Related Page";
}]);

//var changeText = function(id) {
//    var getText = document.getElementById(id).innerText;
//    document.getElementById("verticalText").innerText = getText;
//}


