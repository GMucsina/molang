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

// Table kezelése
piVision.controller("tableController", ["$scope", "$http", function($scope, $http) {

    // Connection
    $scope.tableData = [];
    $scope.tableHeaders = [];
    $scope.orderSource = 'name';
    
    // Http
    /*
    $scope.url="https://raw.githubusercontent.com/jokecamp/FootballData/master/Euro%202016/hungary-players.json";
    $http.get($scope.url).then( function(res) {
        $scope.tableData = res.data.sheets.Players;
        for (var i = 0; i < 5; i++) {
            $scope.tableData = $scope.tableData.concat(angular.copy($scope.tableData));
        }
        $scope.tableHeaders = Object.keys($scope.tableData[0]);
    }, function(err) {
        console.error(err);
    }) ;
    */

    // Functions
    $scope.trimHeader = function(str, lgt) {
        lgt = lgt || 5;
        return str.substr(0, lgt);
    }

    $scope.getPlayers = function() {
        $scope.url="https://raw.githubusercontent.com/jokecamp/FootballData/master/Euro%202016/hungary-players.json";
        $http.get($scope.url).then( function(res) {
            $scope.tableData = res.data.sheets.Players;
            for (var i = 0; i < 5; i++) {
                $scope.tableData = $scope.tableData.concat(angular.copy($scope.tableData));
            }
            $scope.tableHeaders = Object.keys($scope.tableData[0]);
        }, function(err) {
            console.error(err);
        }) ;
    };
}]);