kinoApp.controller('workoutController', function($scope, $localStorage, RoundService) {

    $scope.users = $localStorage.users;


    angular.forEach($scope.users, function(value, key){
        $scope.incb = $scope.users[key]["starting_lifts"]["Incline Bench Press"];
        $scope.ben = $scope.users[key]["starting_lifts"]["Bench Press"];
        $scope.raise = 0;
        $scope.crush = 0;
    });

    $scope.lifts = [
        {
            name: 'Incline Bench Press',
            sets: [{
                weight: RoundService.getround($scope.incb *.6),
                reps: 5
            },
            {
                weight: RoundService.getround($scope.incb * .75),
                reps: 3
            },
            {
                weight: RoundService.getround($scope.incb * .9),
                reps: 1
            },
            {
                weight: RoundService.getround($scope.incb),
                reps: 5
            },
            {
                weight: RoundService.getround($scope.incb * .9),
                reps: 6

            },
            {
                weight: RoundService.getround($scope.incb * .8),
                reps: 8
            }]},
        {
            name: 'Bench Press',
            sets: [
                {
                    weight: RoundService.getround($scope.ben),
                    reps: 5
                },
                {
                    weight: RoundService.getround($scope.ben * .9),
                    reps: 6

                },
                {
                    weight: RoundService.getround($scope.ben * .8),
                    reps: 8
                }]},
        {
            name: 'Lateral Raise',
            sets: [
                {
                    weight: $scope.raise,
                    reps: 12
                },
                {
                    weight: $scope.raise,
                    reps: 12

                },
                {
                    weight: $scope.raise,
                    reps: 12
                }]},
        {
            name: 'Skull Crushers',
            sets: [
                {
                    weight: $scope.crush,
                    reps: 12
                },
                {
                    weight: $scope.crush,
                    reps: 12
                },
                {
                    weight: $scope.crush,
                    reps: 12
                }]},


    ];

    //$scope.plusOne = function(index) {
    //    $scope.products[index].likes += 1;
    //};

    $scope.minusOne = function(index, x) {
            return $scope.lifts[x].sets[index].reps -= 1;
    };

});

kinoApp.service('RoundService', function() {

    this.getround = function(a) { return ( Math.round(a) - (Math.round(a) % 5)) };
});
//
//kinoApp.factory("Round", function (num) {
//    var rnum = Math.round(num);
//    return (rnum - (rnum % 5));

//});