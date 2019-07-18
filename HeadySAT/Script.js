
var headyApp = angular.module("headyApp", ["ngRoute"]);
headyApp.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $locationProvider.html5mode(true).hashPrefix('!');
    $routeProvider
        .when("/details", {
            templateUrl: "/Templates/details.htm",
            controller: "detailsController"
        })
        .when("/description", {
            templateUrl: "/Templates/description.htm",
            controller: "descriptionController"
        })
        .when("/reviews", {
            templateUrl: "/Templates/reviews.htm",
            controller: "reviewsController"
        })
        .when("/related", {
            templateUrl: "/Templates/related.htm",
            controller: "relatedController"
        })
        .otherwise({
            redirectTo:"/Templates/details.htm"
        });
}]);
headyApp.controller("detailsController", function ($scope) {
    //$scope.message = "I love Paris";
});
headyApp.controller("descriptionController", function ($scope) {
    //$scope.message = "I love Paris";
});
headyApp.controller("reviewsController", function ($scope) {
    $scope.message = "Reviews Page";
});
headyApp.controller("relatedController", function ($scope) {
    $scope.message = "Related Page";
});

//var changeText = function(id) {
//    var getText = document.getElementById(id).innerText;
//    document.getElementById("verticalText").innerText = getText;
//}


