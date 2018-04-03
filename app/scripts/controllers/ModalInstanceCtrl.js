(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.cancel = function() {
          $uibModalInstance.dismiss('dismiss')
        }
        this.ok = function() {
          $uibModalInstance.close(this.roomName)
        }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})()
