(function() {
    function ModalCtrl($uibModal, Room, $scope) {
        this.open = function() {
            var newRoomModal = $uibModal.open({
                templateUrl: '/templates/modal_newroom.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })

            newRoomModal.result.then(function(roomName) {
              Room.add(roomName);
              }
            )
    }
}

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', '$scope', ModalCtrl])
})();
