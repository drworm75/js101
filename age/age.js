var secondsPerMinute = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
var yearsPerDecade = 10;
var myAge = 41

console.log("There are ", hoursPerDay * daysPerYear, " hours in a year");
console.log("There are ", minutesPerHour * hoursPerDay * daysPerYear * yearsPerDecade, " minutes in a decade!");
console.log("I am ", secondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear * myAge, " seconds old.");

var userAge = prompt("How old are you?");
if (userAge >= 40) {
	console.log("I am old!");
} 

else {
	console.log("I am Young!");
}
