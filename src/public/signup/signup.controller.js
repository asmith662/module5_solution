(function () {
  'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService) {
    var signUp = this;

    signUp.user = {};
    signUp.shortName = {};
    signUp.showError = false;
    signUp.showMessage = false;

    signUp.submit = function(form) {
      signUp.showError = false;
      signUp.showMessage = false;

      if(form.$invalid) {
        console.log('The form is not valid');
        return;
      }

      MenuService.getMenuItem(signUp.shortName)
                 .then(function(response) {
                    signUp.user.shortName = response.data;
                    MenuService.setUser(signUp.user);
                    signUp.showMessage = true;
                  }, function(error) {
                    signUp.showError = true;
                  });

      }
    };

})();
