(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      var newUserModal = $uibModal.open({
        templateUrl: '/templates/modal_newuser.html',
        controller: 'NewUserModalCtrl as newUserPrompt'
      })

      newUserModal.result.then(function(username) {
        $cookies.put("blocChatCurrentUser", username);
      })

    }
  }

    angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies]);
  })();
