Accounts.onLogin(function(info) {
  var e, email, ref, result, user;
  user = info.user;
  var userId = user._id;

  // Add initial user to admin role
  Meteor.call('addFirstUserToAdminRole', userId);
});
