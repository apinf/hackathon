Meteor.startup(function () {
  Meteor.call("createAdminRoleIfNotDefined");
});
