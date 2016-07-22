angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.pokeGoChat', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/pokeGoChat.html',
        controller: 'pokeGoChatCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.inscription'
      2) Using $state.go programatically:
        $state.go('tabsController.inscription');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /home/tab1/sing-up
      /home/tab3/sing-up
  */
  .state('tabsController.inscription', {
    url: '/sing-up',
    views: {
      'tab1': {
        templateUrl: 'templates/inscription.html',
        controller: 'inscriptionCtrl'
      },
      'tab3': {
        templateUrl: 'templates/inscription.html',
        controller: 'inscriptionCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('room', {
    url: '/room',
    templateUrl: 'templates/room.html',
    controller: 'pokeGoChatCtrl'
  })

$urlRouterProvider.otherwise('/home/home')

  

});