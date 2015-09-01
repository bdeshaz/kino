kinoApp.controller('mainController', function($scope, Users, $localStorage, $route) {
    $scope.formURL = "views/main.html";
    $scope.users = Users;

    $scope.addUsers = function () {
      $scope.users[$scope.nm.id] = $scope.nm;
        delete($scope.users[$scope.nm.id].id);
        delete($scope.nm);
      $localStorage.users = $scope.users;
    };

    $scope.loadUsers = function () {
        $scope.data = $localStorage.users;
    }
});

kinoApp.factory("Users", function () {
    var Users = {};
    return Users;
});