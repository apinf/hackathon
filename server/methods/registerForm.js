Meteor.methods({
  register: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.registerForm);

    // Build the e-mail text
    var text = "Name: " + doc.firstName + doc.secondName + "\n\n"
    + "Email: " + doc.email + "\n\n"
    + "Company / Organization / Educational institution: " + doc.company + "\n\n"
    + "Special diet: " + doc.diet + "\n\n"
    + "Other team members: " + doc.teamMembers + "\n\n"
    + "Name of the hackathon team: " + doc.teamName + "\n\n"
    + "Tell us about your team: " + doc.teamInfo + "\n\n"
    + "Tell us about the type of problem you want to solve or idea you have: " + doc.teamIdeas + "\n\n";

    this.unblock();

    // Send the e-mail
    Email.send({
      to: Meteor.settings.mail.masterEmail,
      from: doc.email,
      subject: "Apinf Hackathon Register Form - Message From " + doc.firstName + doc.secondName,
      text: text
    });
  }
});
