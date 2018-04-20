(function() {
    function NewUserModalCtrl($uibModalInstance) {
        this.ok = function() {
          $uibModalInstance.close(this.username)
        }
    }

    angular
        .module('blocChat')
        .controller('NewUserModalCtrl', ['$uibModalInstance', NewUserModalCtrl])
})();
