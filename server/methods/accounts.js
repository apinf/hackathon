Meteor.methods({
  countUsers: function () {
    // Get all users
    var users = Meteor.users.find().fetch();

    // Count the number of users
    var usersCount = users.length;

    return usersCount;
  }
});
