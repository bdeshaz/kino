kinoApp.controller('mainController', function($scope, Users, $localStorage, $location) {
    $scope.formURL = "views/setup.html";
    $scope.users = Users;

    $scope.addUsers = function () {
        var height_inches = ($scope.nm.feet * 12) + ($scope.nm.inches);

        if($scope.nm.gender == "male"){
            if(height_inches >= 60){
                $scope.nm.weight = Math.round((106 + ((height_inches - 60) * 6)) * .958);
            }else {
                $scope.nm.weight = Math.round((106 - ((60 - height_inches) * 6)) * .958);
            }
        }else if($scope.nm.gender == "female"){
            if(height_inches >= 60){
                $scope.nm.weight = Math.round((100 + ((height_inches - 60) * 5)) * .958);
            }else {
                $scope.nm.weight = Math.round((100 - ((60 - height_inches) * 5)) * .958);
            }
        }else{
            if(height_inches >= 60){
                $scope.nm.weight = Math.round((103 + ((height_inches - 60) * 5.5)) * .958);
            }else {
                $scope.nm.weight = Math.round((103 - ((60 - height_inches) * 5.5)) * .958);
            }
        }

      $scope.users[$scope.nm.id] = $scope.nm;
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