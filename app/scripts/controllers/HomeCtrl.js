(function() {
    function HomeCtrl($scope, Room) {
      $scope.roomList = Room.all;
      
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
