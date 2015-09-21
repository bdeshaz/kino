kinoApp
    .controller('startController', function($scope, $localStorage, $location) {
        var lifts =
        {
            'Incline Bench Press': '',
            'Bench Press': '',
            'Pull Ups': '',
            'Deadlifts': '',
            'Overhead Press': ''

        };

        $scope.lifts = lifts;

        $scope.addStarts = function () {
            angular.forEach($scope.lifts, function(value, key){
                $scope.lifts[key] = Math.round((value *.85)/.75);
            });
            angular.forEach($localStorage.users, function(value, key){
                $localStorage.users[key]["starting_lifts"] = $scope.lifts;
            });
            delete($scope.lifts);
            $location.path("/workout");

        };

        $scope.loadUsers = function () {
            $scope.users = $localStorage.users;
        }
    });
