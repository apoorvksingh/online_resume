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
        "dates": "2012",
        "majors": [
                "Computer Science and Engineering"],
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
            for( var index = 0; index < bio.skills.length; index++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

work.display = function() {
    for(var index = 0; index < work.jobs.length; index++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
        $(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for(var index = 0; index < projects.projects.length; index++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
        $(".project-entry").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
        $(".project-entry").append(formattedDates);
        var formattedDes = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
        $(".project-entry").append(formattedDes);
        var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[index].images);
        $(".project-entry").append(formattedImg);
    }
};

education.display = function() {
    for(var index = 0; index < education.schools.length; index++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name);
        $(".education-entry").append(formattedName);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
        $(".education-entry").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
        $(".education-entry").append(formattedDegree);
        var formattedYear = HTMLschoolDates.replace("%data%", education.schools[index].dates);
        $(".education-entry").append(formattedYear);
        for (var innerindex = 0; innerindex < education.schools[index].majors.length; innerindex++) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors[innerindex]);
            $(".education-entry").append(formattedMajor);
        }
        var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[index].url);
        $(".education-entry").append(formattedUrl);
    }
    if (education.online.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        for(var index = 0; index < education.online.length; index++) {
                        var formattedTitle = HTMLonlineTitle.replace("%data%", education.online[index].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.online[index].school);
            $(".education-entry").append(formattedTitle + formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", education.online[index].dates);
            $(".education-entry").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.online[index].url);
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