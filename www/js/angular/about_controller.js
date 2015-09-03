kinoApp.controller('aboutController', function($scope, Users, $localStorage, $location) {
    $scope.formURL = "views/setup.html";
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

    $scope.loadUsers();

    $scope.showMenu = $location.path() !== '/';



});

