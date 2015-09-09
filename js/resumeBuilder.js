var work = {
	"jobs": [
		{
			"title": "IT-Clientmanagement",
			"employer": "Bene AG",
			"dates": "2014",
			"location": "Waidhofen/Ybbs Schwarzwiesenstraße 3",
			"description": "I was working in the IT-Support"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Udacity Nanodegree Front-End Developer",
			"dates": "2015",
			"description": "I am learning Web Development",
			"images": [
				"https://yt3.ggpht.com/-slzOwsq8iv0/AAAAAAAAAAI/AAAAAAAAAAA/KMUFhY9BQXc/s100-c-k-no/photo.jpg"
			]
		}
	]
};

var bio = {
	"name": "Thomas Farfeleder",
	"role": "Web Developer",
	"contacts": {
		"mobile": "0660-6226337",
		"email": "thomas.farfeleder@gmail.com",
		"github": "qwertz92",
		"twitter": "@one_fufi",
		"location": "Waidhofen/Ybbs Möhringer Straße 16/5"
	},
	"bioPic": "images/ThomasFarfeleder.jpg",
	"welcomeMessage": "Welcome to my Homepage",
	"skills": ["HTML/CSS", "Phyton", "Linux", "JS"]
};

var education = {
	"schools": [
		{
			"name": "Sporthauptschule Zell",
			"location": "Waidhofen/Ybbs Hauptplatz 17a",
			"degree": "successfully completed",
			"major": ["Sports"],
			"dates": "2002",
			"url": "http://sportmittelschule-waidhofen-zell.schulweb.at"
		},
		{
			"name": "HTL Waidhofen/Ybbs",
			"location": "Waidhofen/Ybbs Vogelsang 8",
			"degree": "No degree",
			"major": ["electrical engineering", " computer science"],
			"dates": "2006",
			"url": "https://www.htlwy.ac.at/homepage/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};






bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedName, formattedRole);
	$("#topContacts").append(formattedmobile);
	$("#topContacts").append(formattedemail);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedgithub);
	$("#topContacts").append(formattedlocation);
	$("#header").append(formattedPic, formattedMsg);
};

bio.display();


bio.skills.display = function() {
	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	};
};

bio.skills.display();


work.display = function() {

	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedDescription);
	};
};

work.display();


projects.display = function() {

	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

		$(".project-entry:last").append(formattedImage);
	};

}

projects.display();


education.display = function() {

	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;

		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$(".education-entry:last").append(formattedMajor);
	};
}

education.display();


education.onlineCourses.display = function() {
	$("#education").append(HTMLonlineClasses);

	for(i = 0; i < education.onlineCourses.length; i++) {
		var course = i;
		
		$("#education").append(HTMLonlineStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;

		$(".course-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

		$(".course-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);

		$(".course-entry:last").append(formattedURL);
	};
};

education.onlineCourses.display();


// Append Google Maps

$("#mapDiv").append(googleMap);


// Append the internationalize Button to Header

$("#header").append(internationalizeButton);

function inName(name) {
	name = name.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name = name.join(" ");
	return name;
};

// Append the menu right form the Button

$(".wrapper").append(HTMLmenu);

/*
* Open the drawer when the menu icon is clicked.
*/
var menu = document.querySelector('#menu');
var main = document.querySelector('#main');
var drawer = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});
main.addEventListener('click', function() {
	drawer.classList.remove('open');
});