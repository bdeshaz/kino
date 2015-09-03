kinoApp.controller('mainController', function($scope, Users, $localStorage, $location) {
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
        angular.forEach($scope.data, function(value, index){
            var height_inches = (value.feet * 12) + (value.inches);
            if(height_inches >= 60){
                $scope.total = Math.round((106 + ((height_inches - 60) * 6)) * .958);
            }else{
                $scope.total = Math.round((106 - ((60 - height_inches) * 6)) * .958);
            }
        });
    };


    $scope.loadUsers();

    $scope.showMenu = $location.path() !== '/';
});

kinoApp.factory("Users", function () {
    var Users = {};
    return Users;
});