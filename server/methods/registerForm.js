Meteor.methods({
  register: function(registrationId) {
    var registration = Registrations.findOne(registrationId);

    // Send the e-mail
    Email.send({
      to: Meteor.settings.mail.masterEmail,
      from: registration.email,
      subject: "Apinf Hackathon Register Form - Message From " + registration.firstName + registration.secondName,
      html: Handlebars.templates['registrationContent'](registration)
    });
  }
});
