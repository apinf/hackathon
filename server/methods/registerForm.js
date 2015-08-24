Meteor.methods({
  register: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.registerForm);

    // Build the e-mail text
    var text = "Name: " + doc.name + "\n\n"
    + "Email: " + doc.email + "\n\n\n\n"
    + doc.message;

    this.unblock();

    // Send the e-mail
    Email.send({
      to: Meteor.settings.mail.masterEmail,
      from: doc.email,
      subject: "Apinf Hackathon Register Form - Message From " + doc.name,
      text: text
    });
  }
});
