/*
var awesomeThoughts = "I am Thomas and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

var name = "Thomas Farfeleder";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "WebDeveloper";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["awesomeness", "programming", "teaching", "JS"];
*/
var work = {
	"jobs": [
		{
			"title": "IT-Clientmanagement",
			"employer": "Bene AG",
			"dates": "1 year",
			"location": "Waidhofen/Ybbs",
			"description": "I was working in the IT-Support"
		}
	]
};

var project = {
	"projects": [
		{
			"title": "Udacity Nanodegree Front-End Developer",
			"dates": "2 months",
			"description": "I am learning Web Development",
			"images": [
				"images/197x148.gif"
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
		"location": "Waidhofen/Ybbs"
	},
	"bioPic": "images/fry.jpg",
	"welcomeMessage": "Welcome to my Homepage",
	"skills": ["awesomeness", "programming", "teaching", "JS"]
};

var education = {
	"schools": [
		{
			"name": "Sporthauptschule Zell",
			"location": "Waidhofen/Ybbs",
			"degree": "successfully completed",
			"major": ["Sports", "Mathematics"],
			"dates": "4 years",
			"url": "http://sportmittelschule-waidhofen-zell.schulweb.at"
		},
		{
			"name": "HTL Waidhofen/Ybbs",
			"location": "Waidhofen/Ybbs",
			"degree": "No degree",
			"major": ["Informatics"],
			"dates": "6 years",
			"url": "https://www.htlwy.ac.at/homepage/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2 months",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};



education.name = "HTL Waidhofen/Ybbs";
education.years = "6 years";
education["city"] = "Waidhofen/Ybbs";


/*
$("#header").prepend(formattedName, formattedRole);
$("#main").append(skills);
$("#main").append(funThoughts);
*/

$("#main").append(bio.name);
$("#main").append(work["position"]);
$("#main").append(education.name);
/*
This is empty on purpose! Your code to build the resume will go here.
 */