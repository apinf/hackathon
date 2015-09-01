Registrations = new Mongo.Collection('registrations');

RegisterFormSchema = new SimpleSchema({
  firstName: {
    type: String,
    label: "First name",
    max: 50,
    optional: false,
    autoform: {
      placeholder: 'Your first name'
    }
  },
  lastName: {
    type: String,
    label: "Last name",
    max: 50,
    optional: false,
    autoform: {
      placeholder: 'Your last name'
    }
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail address",
    optional: false,
    autoform: {
      placeholder: 'Your email'
    }
  },
  company: {
    type: String,
    label: "Company / Organization / Educational institution",
    max: 50,
    optional: false,
    autoform: {
      placeholder: 'Company / Organization / Educational institution'
    }
  },
  diet: {
    type: String,
    label: "Special diet",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5,
      placeholder: 'Special diet'
    }
  },
  teamMembers: {
    type: String,
    label: "Other team members",
    max: 1000,
    optional: false,
    autoform: {
      rows: 5,
      placeholder: 'Provide name, company/organization/educational institution, email (max 3 persons per team)'
    }
  },
  teamName: {
    type: String,
    label: "Name of the hackathon team",
    max: 1000,
    optional: false,
    autoform: {
      rows: 5,
      placeholder: 'Name of the hackathon team'
    }
  },
  teamInfo: {
    type: String,
    label: "Tell us about your team",
    max: 1000,
    optional: false,
    autoform: {
      rows: 5,
      placeholder: 'Tell us about your team'
    }
  },
  teamIdeas: {
    type: String,
    label: "Tell us about the type of problem you want to solve or idea you have",
    max: 1000,
    optional: false,
    autoform: {
      rows: 5,
      placeholder: 'Tell us about the type of problem you want to solve or idea you have'
    }
  }
});


Registrations.attachSchema(RegisterFormSchema);

Registrations.allow({
  insert: function () {
    return true;
  }
});

