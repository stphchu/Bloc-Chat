(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        this.cancel = function() {
          $uibModalInstance.dismiss('dismiss')
        }
        this.ok = function() {
          $uibModalInstance.close(this.roomName)
        }
          //Test if room already exists
        /*  var roomNames = rooms.map(function(room) {
            return room.$value;
          })

                try {
                  if (roomNames.includes(roomName)) {
                    throw "*Room already exists";
                  }
                  else {
                    $uibModalInstance.close(this.roomName);
                  }
                }
                catch(error){
                  errorMessage.innerHTML = error;
                }
        }
        */
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})();
