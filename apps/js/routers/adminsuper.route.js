angular.module("adminsuper.router", [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/account/login');
        $stateProvider
            .state("adminsuper", {
                url: '/adminsuper',
                templateUrl: 'apps/views/adminsuper/index.html'
            })
            .state("adminsuper-home", {
                url: '/home',
                parent: "adminsuper",
                controller: 'adminsuperHomeController',
                templateUrl: 'apps/views/adminsuper/home.html'
            })
    });