(function() {
    function NewUserModalCtrl($uibModalInstance, $scope) {
        this.ok = function() {
          if (this.username == undefined || this.username.length === 0){
            $scope.newUserError = "*Username is invalid";
            return;
          }
          else {
          $uibModalInstance.close(this.username)
          };
        }
    }

    angular
        .module('blocChat')
        .controller('NewUserModalCtrl', ['$uibModalInstance', '$scope', NewUserModalCtrl])
})();
