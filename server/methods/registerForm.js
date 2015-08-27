Meteor.methods({
  register: function(registrationId) {
    var registration = Registrations.findOne(registrationId);

    this.unblock();

    // Send the e-mail to organizers
    Email.send({
      to: registration.email,
      from: Meteor.settings.mail.masterEmail,
      subject: "Apinf Hackathon Registrations",
      html: Handlebars.templates['confirmationLetter'](registration)
    });
  }
});
