var bio = {
    "name": "Apoorv Kumar Singh",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+919599750059",
        "email": "apoorvksingh@hotmail.com",
        "twitter": "Singh_ApoorvK",
        "github": "apoorvksingh",
        "location": "Gurgaon, India"
    },
    "welcomeMessage": " Hi, I am a developer with experience in Front-End Web Design, .NET, Android and iOS development",
    "skills": ["HTML", "CSS", "JavaScript", "Java", "C#", "Swift"],
    "biopic": "images/profile.jpg"
};

var work = {
    "jobs": [{
        "title": "Technical Account Manager",
        "employer": "Microsoft Corporation India Pvt. Ltd.",
        "dates": "2012 - 2016",
        "location": "Bangalore, India",
        "description": "Managed support contracts for domestic and global clients in various industries, such as technology, healthcare and finance"
    }, {
        "title": "Intern",
        "employer": "Quantum Electrosoft Pvt. Ltd.",
        "dates": "Summer, 2010",
        "location": "Noida, India",
        "description": "Created a new company website template for Quantum Electrosoft using HTML, JavaScript and CSS"
    }]

};

var education = {
    "schools": [{
        "name": "Manipal Institute of Technology",
        "location": "Manipal, India",
        "degree": "Bachelor of Engineering",
        "year": "2012",
        "majors": "Computer Science and Engineering",
        "url": "http://www.manipal.edu/mit.html"
    }],
    "online": [{
        "title": "Beginning iOS App Development Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://classroom.udacity.com/nanodegrees/nd006"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://classroom.udacity.com/nanodegrees/nd001"
    }, {
        "title": "Android Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://classroom.udacity.com/nanodegrees/nd801"
    }]
};

var projects = {
    "projects": [{
            "title": "Build a Portfolio Site",
            "dates": "June, 2016",
            "description": "A responsive website that displays images, descriptions and links to each of the portfolio projects completed throughout the course of the Front-End Web Developer Nanodegree",
            "images": ["images/portfolio_project.png"]
        }, {
            "title": "Silly Song App",
            "dates": "May, 2016",
            "description": "iOS app to generate funny songs built around the entered name. Banana-fana fo-fana!",
            "images": ["images/sillysong_project.png"]
        }

    ]
};

bio.display = function() {
    if (bio !== null) {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").prepend(formattedLocation);
        $("#footerContacts").prepend(formattedLocation);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").prepend(formattedGitHub);
        $("#footerContacts").prepend(formattedGitHub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").prepend(formattedTwitter);
        $("#footerContacts").prepend(formattedTwitter);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").prepend(formattedEmail);
        $("#footerContacts").prepend(formattedEmail);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").prepend(formattedMobile);
        $("#footerContacts").prepend(formattedMobile);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMsg);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill in bio.skills) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

work.display = function() {
    for (var jobIndex in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title);
        $(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobIndex].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry").append(formattedDates);
        var formattedDes = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry").append(formattedDes);
        var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry").append(formattedImg);
    }
};

education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry").append(formattedName);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry").append(formattedDegree);
        var formattedYear = HTMLschoolDates.replace("%data%", education.schools[school].year);
        $(".education-entry").append(formattedYear);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry").append(formattedMajor);
        var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url);
        $(".education-entry").append(formattedUrl);
    }
    if (education.online.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        for (var course in education.online) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.online[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.online[course].school);
            $(".education-entry").append(formattedTitle + formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", education.online[course].dates);
            $(".education-entry").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.online[course].url);
            $(".education-entry").append(formattedUrl);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

/*
$("#main").append(internationalizeButton);

function inName() {
    var names = bio.name.split(" ");
    var firstName = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
    names.shift();
    for(name in names) {
        names[name] = names[name].toUpperCase();
    }
    var internationalizedName = firstName + " " + names.join(" ");
    return internationalizedName;
}
function logclicks(x, y) {
    var cood = "X-Coordinate = " + x + ", Y-Coordinate = " + y;
    console.log(cood);
}

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logclicks(x,y);
});
*/