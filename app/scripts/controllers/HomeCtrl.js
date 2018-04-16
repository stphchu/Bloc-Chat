(function() {
    function HomeCtrl($scope, Room, Message) {
      $scope.roomList = Room.all;
      $scope.setCurrentRoom = function(selectedRoom){
        $scope.currentRoom = selectedRoom;
        $scope.allMessages = Message.getByRoomId(selectedRoom.$id);
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();
