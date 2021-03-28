(function() {
    'use strict';

    angular.module('public')
        .controller('MyInfoController',MyInfoController)

    MyInfoController.$inject = ['MenuService','ApiPath'];
    function MyInfoController(MenuService,ApiPath) {
        let myinfo = this;
        myinfo.ApiPath = ApiPath;

        myinfo.signedUp = false;

        myinfo.user = MenuService.getUser();
        console.log('user is: ', myinfo.user.firstName);
        if (angular.equals(myinfo.user, {})) {
            console.log("true")
            myinfo.signedUp = false;
        } else {
            console.log("false")

            myinfo.signedUp = true;
        }
      //  myinfo.isUserRegistered = !(Object.keys(user).length === 0 && user.constructor === Object);




    }
})();
