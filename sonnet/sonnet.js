// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable
var element = document.getElementById("sonnet");
var theBard = element.innerHTML;

// Find and output the starting position of the word "orphans"
var orphansStart = theBard.indexOf("orphans");
console.log("In the sonnet, the word orphans starts at index: \n", orphansStart);
// Output the number of characters in the sonnet
console.log("The sonnet has ", theBard.length, "total characters");
// Replace the first occurance of the string "winter" with "yuletide"
var xmasBard = theBard.replace("winter", "yuletide");
console.log("Using the function replace, we can exchange the word winter with yuletide: \n", xmasBard);
// Replace all occurances of the string "the" with "a large"
var largeBard = xmasBard.replace(/the\s/g, "a large ");
console.log("Using the function replace and a global modififer (/the/g), we can exchange every instance of the word \"the\" with \"a large\": \n", largeBard);
// Set the content of the sonnet div with the new string
element.innerHTML= largeBard;

