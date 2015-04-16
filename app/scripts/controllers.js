'use strict';
angular.module('JavaIonicSecurity.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
  // Form data for the login modal


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.close = function () {
      $scope.modal.hide();
    },

    // Open the login modal
    $scope.login = function () {
      $scope.loginData = {
        username: $scope.usernameLogin,
        password: $scope.passwordLogin
      };
      $scope.modal.show();
      $scope.showLogin = true;
      $scope.showRegister = false;
    },

    $scope.register = function () {
      $scope.registerData = {
        username: $scope.username,
        password: $scope.password,
        name: $scope.name,
        surname: $scope.surname,
        email: $scope.email,
        number: $scope.number
      };
      $scope.showRegister = true;
      $scope.showLogin = false;
    };



  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function () {
      $scope.closeLogin();
    }, 1000);
  }
})

.controller('PlaylistsCtrl', function ($scope) {})

.controller('PlaylistCtrl', function ($scope, $stateParams) {});