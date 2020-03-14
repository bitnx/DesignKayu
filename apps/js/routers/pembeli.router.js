angular.module("pembeli.router", [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/account/login');
        $stateProvider
            .state("pembeli", {
                url: '/pembeli',
                templateUrl: 'apps/views/pembeli/index.html'
            })
            .state("pembeli-home", {
                url: '/home',
                parent: "pembeli",
                templateUrl: 'apps/views/pembeli/home.html'
            })
            .state("pembeli-detailproduk", {
                url: '/detailproduk',
                parent: "pembeli",
                templateUrl: 'apps/views/pembeli/detailproduk.html'
            })
    });