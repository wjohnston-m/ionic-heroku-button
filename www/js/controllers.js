angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.login = function(){
      return $http.post('/login').then(function(result){
        console.log('login result');
        return result;
      })
    },
  }
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
