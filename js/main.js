// Angular Modul létrehozása

var piVision = angular.module("piVision", []);

// Menü kezelése
piVision.controller("menuController", ["$scope", function($scope) {
    $scope.brand = "MOL PI System";

    // Menüpontok
    $scope.menuItems = [
        {
            "name": "Home",
            "href": "#"
        },
        {
            "name": "Contact",
            "href": "contact"
        }
    ]
}]);