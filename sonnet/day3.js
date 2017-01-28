// var myCat = {
// 	tail: "long",
// 	age: 29,
// 	color: "blue",
// 	friends: ["zoe", "callan", "lauren"]
// }

// console.log("Age of cat: ", myCat.age);
// console.log("Color of cat: ", myCat["color"]);

// for (var myKey in myCat) {
// 	console.log("myKey", myKey);
// 	console.log("values", myCat[myKey]);
// }


function nuggetMaker(animal) {
	var myNugget = animal + " nugget"
	return myNugget;
}

function shackMaker(divLocation, typeOfNugget) {
	divLocation.innerHTML += typeOfNugget + "<br>";
}

var chickenNuggets = nuggetMaker("chicken");
shackMaker(availElement, chickenNuggets);

var lobsterNuggets = nuggetMaker("lobster");
shackMaker(availElement, lobsterNuggets);

var chipmuckNuggets = nuggetMaker("chipmuck");
shackMaker(availElement, chipmuckNuggets);




var colors = ["red", "blue", "gold"]

function myLooper(myArray) {
	for (var i = 0; i < myArray.length; i++) {
		console.log(myArray[i]);
	}
}

myLooper(colors);

