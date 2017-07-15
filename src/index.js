(() => {
  angular
    .module('artist', [
      'ui.router',
    ])
    .config(Config);

  function Config($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/#');

    $stateProvider
      .state('search', {
        url: '/',
        templateUrl: 'views/search/searchV.html',
        controller: 'searchC as searchC',
      })
      .state('artist', {
        url: '/:id',
        templateUrl: 'views/artist/artistV.html',
        controller: 'artistC as artistC',
      });
    // .state('artistCreate', {
    //   url: '/create',
    //   templateUrl: 'views/artistCreate/artistCreateV.html',
    //   controller: 'artistCreateC as artistCreateC',
    // })
    // .state('artistEdit', {
    //   url: '/:id/edit',
    //   templateUrl: 'views/artistEdit/artistEditV.html',
    //   controller: 'artistEditC as artistEditC',
    //   resolve: {
    //     artist($stateParams, Flavors) {
    //       return Flavors.get($stateParams.id);
    //     },
    //   },
    // });
  }
})();
