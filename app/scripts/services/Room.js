(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(roomName) {
      rooms.$add(roomName);
    }

    Room.isDuplicate = function(roomName){
      var roomNames = rooms.map(function(room) {
        return room.$value;
      })
        return roomNames.includes(roomName);
    }

  return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
