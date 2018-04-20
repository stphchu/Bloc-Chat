(function() {
    function ModalInstanceCtrl($uibModalInstance, $scope, Room) {
        this.cancel = function() {
          $uibModalInstance.dismiss('cancel')
        }

        this.ok = function() {
          if (Room.isDuplicate(this.roomName)){
            $scope.errorMessage = "*Room already exists";
            return;
          }
          else {
            $uibModalInstance.close(this.roomName)
          }
        }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', '$scope', 'Room', ModalInstanceCtrl])
})();


/*
NOTES:

angular.module('blocChat')
  .controller('ModalInstanceCtrl', ['blah1', 'blah2' function(blah1, blah2) {

  }])
*/
