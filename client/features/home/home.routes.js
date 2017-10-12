routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      //template: '<h1>templeate test</h1>',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}