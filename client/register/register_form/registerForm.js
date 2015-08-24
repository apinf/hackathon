Template.registerForm.helpers({
  registerFormSchema: function() {
    return Schema.registerForm;
  }
});


AutoForm.hooks({
  registerForm: {
    beginSubmit: function () {
      // Disable form elements while submitting form
      $('[data-schema-key],button').attr("disabled", "disabled");
    },
    endSubmit: function () {
      // Enable form elements after form submission
      $('[data-schema-key],button').removeAttr("disabled");
    }
  }
});

AutoForm.addHooks(['registerForm'], {
  onSuccess: function (formMethod, registrationId) {
    FlashMessages.sendSuccess('Thank you! Your form has been successfully submitted.');
    Meteor.call('register', registrationId);
  }
});

FlashMessages.configure({
  // Configuration for FlashMessages.
  autoHide: true,
  hideDelay: 5000,
  autoScroll: false
});
