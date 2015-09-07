kinoApp.controller('mainController', function($scope, Users, $localStorage, $location) {
    $scope.formURL = "views/setup.html";
    $scope.users = Users;

    $scope.addUsers = function () {
        var height_inches = ($scope.nm.feet * 12) + ($scope.nm.inches);

        if(height_inches >= 60){
            $scope.nm.weight = Math.round((106 + ((height_inches - 60) * 6)) * .958);
        }else {
            $scope.nm.weight = Math.round((106 - ((60 - height_inches) * 6)) * .958);
        }

        var goal_weight = ($scope.nm.weight);

        $scope.users[$scope.nm.id] = $scope.nm;
        $scope.users[$scope.nm.id]["goals"] = {

        god_incb : Math.round(1.4 * goal_weight),
        great_incb : Math.round(1.2 * goal_weight),
        good_incb : goal_weight,

        god_chin : Math.round(.7 * goal_weight),
        great_chin : Math.round(.5 * goal_weight),
        good_chin : Math.round(.3 * goal_weight),

        god_ohp : goal_weight,
        great_ohp : Math.round(.85 * goal_weight),
        good_ohp : Math.round(.7 * goal_weight),

        god_curl : Math.round(.75 * goal_weight),
        great_curl : Math.round(.65 * goal_weight),
        good_curl : Math.round(.55 * goal_weight)

        };

        delete($scope.users[$scope.nm.id].id);
        delete($scope.nm);
        $localStorage.users = $scope.users;
        $location.path("/about");
    };

    $scope.loadUsers = function () {
        $scope.total = $localStorage.users;
    };

    $scope.loadUsers();

    $scope.showMenu = $location.path() !== '/';
});

kinoApp.factory("Users", function () {
    var Users = {};
    return Users;
});