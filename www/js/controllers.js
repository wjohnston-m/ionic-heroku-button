angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.login = function(){
    console.log('logging in');
    var conn = new jsforce.Connection({
      loginUrl : 'https://test.salesforce.com'
    });
    conn.login('wjohnston@midlandira.com', 'Fr0zen34ZSmGGKJEMDRtd2Pz7cSJyAqf', function(err, res) {
      if (err) { return console.error(err); }
      conn.query('SELECT Id, Name FROM Account', function(err, res) {
        if (err) { return console.error(err); }
        console.log(res);
      });
    });
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
