// // switch statement

// var day = "Friday";

// switch(day){
// 	case "Monday":
// 		console.log("Boooooo!");
// 		break;
// 	case "Friday":
// 		console.log("Party!");
// 		break;	
// 	default:
// 		console.log("not Monday");	
// }



// if (day === "Monday"){
// 	console.log("Boooooo!")
// } else if (day === "Friday"){
// 	console.log("Party!");
// } else {
// 	console.log("Party!");	
// }

//ARRAYS

// var fruit = ["cherries", "apples", "bananas"];
// var fruitString = fruit.join(" + cats , ");
// console.log(fruitString);

// var catColors = 'green,red,yellow,black';
// var carColorsArray = catColors.split(",");
// console.log("carColorsArray", carColorsArray);

// var reverseFruit = fruit.reverse();
// console.log("reverseFruit", reverseFruit);

// var alphaFruit = fruit.sort();
// console.log("alphaFruit", alphaFruit);

// var nums = [9,6,8,2,4,11,66];
// var sortedNums = nums.sort(function(a,b){return a-b});
// console.log("sortedNums", sortedNums);

// var animals = ["cars", "turtles", "fish", "bears", "tigers"];
// console.log(animals.indexOf("fish"));

// var animals2 = animals.slice(2, 4);
// console.log(animals2);

// animals.splice(1, 1);
// console.log(animals);

// var colors = ["red", "blue", "gold", "pink", "orange"];

// //sort, reverse, make a string

// var finalAnswer = colors.sort().reverse().join("cat, ");
// console.log(finalAnswer);

// var fruits = ["cherries", "apples", "bananas", "oranges"]

// for (var i = 0; i < fruits.length; i++) {
// 	console.log("Fruit ", i + 1, " is", fruits[i]);
// }

// write a for loop that increments by 10 each time
for (var i = 10; i <= 100 ; i += 10) {
	console.log(i);
}

var jArray = [];
for (var j = 0; j < 5; j++) {
	jArray.push(j);
}
console.log(jArray)


for (var n = 100; n >= 12.5; n = n/2) {
	console.log(n);
}


