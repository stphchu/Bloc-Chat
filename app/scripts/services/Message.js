(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.send = function(newMessage, roomId) {
      messages.$add({
        "username": $cookies.get('blocChatCurrentUser'),
        "content": newMessage,
        "sentAt": Date.now(),
        "roomId": roomId
      });

    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
