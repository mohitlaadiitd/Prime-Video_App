(function (){

'use strict';

angular.module('PrimeVideoApp', [])
.controller('DropdownController', DropdownController);

function DropdownController() {
    var drop = this;

    drop.showDropdown = false;

    drop.buttonIsPressed = function () {
        if (drop.showDropdown) {
            drop.showDropdown = false;
        }
        else {
            drop.showDropdown = true;
        }
    };

    drop.hide = function () {
        drop.showDropdown = false;
    };
};









// .config(RoutesConfig);

// RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
// function RoutesConfig($stateProvider, $urlRouterProvider) {

//   $urlRouterProvider.otherwise('/');

//   // Set up UI states
//   $stateProvider
//     .state('/', {
//       url: '/',
//       templateUrl: '../index.html'
//     })

//     .state('/dropdown', {
//         url: '/dropdown',
//         templateUrl: '../dropdown.html'
//     })
// }


})();