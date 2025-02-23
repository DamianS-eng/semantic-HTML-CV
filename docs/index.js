const fillInInfo = {
  name : 'John Doe',
  title : 'Junior Frontend Developer',
  contact : {
    address : {
      num : '123',
      street : 'Robot Street'
    },
    municipal : {
      city : 'Principal',
      state : {
        stateFullName: 'KS',
        stateAbbr : 'Kansas'
      }, 
      zipCode : '66612'
  },
    number : {
      area : '841',
      main : '461-3799'
  },
    email : 'buckanddoe@gmail.com'
  },
  skills : [
    'programming',
    'reading',
    'research',
    'troubleshooting',
    'critical thinking',
    'philosophy',
    'chew gum and walk simultaneously'
  ],
  education : {
    school : {
      name: "Cornell Institute",
      location: "Bismark, WA",
      start_date: {
        month: "September",
        year: 2012
          },
      end_date: {
        month: "June",
        year: 2016
          }
    }
  },
  experience : {
    company : {
      name : "Fortune 50",
      location : "Old York, NY",
      is_present : true,
      start_date: {
        month: "August",
        year: 2016
      },
      end_date: {
        month: "",
        year: ""
        },
      skills: [
        "money",
        "discussions",
        "persuasion",
        "note-taking"
        ]
    },
company : {
      name : "Summer Camp",
      location : "Rio Grande, MS",
      is_present : false,
      start_date: {
        month: "June",
        year: 2016
      },
      end_date: {
        month: "August",
        year: "2016"
        },
      skills: [
        "childcare",
        "organization"
        ]
    },
  },
  internet : {
    website : 'google.com',
    social : 'musk@x.com'
  }
}

const skillsEle = document.querySelector("#skillslist");


window.onload = function(e) {
  
};
