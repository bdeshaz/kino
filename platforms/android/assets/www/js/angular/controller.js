kinoApp.controller('mainController', function($scope, Users, $localStorage, $location) {
    $scope.formURL = "views/main.html";
    $scope.users = Users;

    $scope.addUsers = function () {
      $scope.users[$scope.nm.id] = $scope.nm;
        delete($scope.users[$scope.nm.id].id);
        delete($scope.nm);
        $localStorage.users = $scope.users;
        $location.path("/about");
    };

    $scope.loadUsers = function () {
        $scope.data = $localStorage.users;
    };

    $scope.showMenu = $location.path() !== '/';
});

kinoApp.factory("Users", function () {
    var Users = {};
    return Users;
});