// EXAMPLES OF BUILT IN FUNCTIONS
var quote = "\"Life is like riding a bicycle. To keep your balance, you must keep moving.\"";

// Length
console.log("Length: ", quote.length);

// Finding characters in a string
console.log("Period at index: ", quote.indexOf("."));

// Determine which character is at a position in a string
var position = quote.charAt(23);
console.log("Letter at index 11: ", position); // Will console "h"

//Replacing characters in string
var conveyance = prompt("Bicycles are boring. Choose a new form of conveyance!")
var newPhrase = quote.replace("bicycle", conveyance);

if (newPhrase.charAt(23) === "a" || newPhrase.charAt(23) === "e" ||newPhrase.charAt(23) === "i" ||newPhrase.charAt(23) === "o" ||newPhrase.charAt(23) === "u") {
	var anNewPhrase = newPhrase.replace("a", "an");
	console.log(anNewPhrase)
}
else console.log(newPhrase);


// console.log("Quote with replaced word: ", newPhrase);

// var newPhrase = quote.replace(/i/g, "z");
