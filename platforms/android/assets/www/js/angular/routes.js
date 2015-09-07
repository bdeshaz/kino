kinoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/', {
          templateUrl: 'views/setup.html',
          controller: 'mainController',
          resolve: {
              "check": function($localStorage, $location){
                  if(!$localStorage.users){

                  }else{
                      $location.path('/about');
                  }
              }
          }
        }).
        when('/about', {
          templateUrl: 'views/about.html',
            controller: 'mainController'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);

