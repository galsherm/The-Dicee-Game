// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Determine the file name of the dice image based on randomNumber1
var diceImageName1 = "dice" + randomNumber1 + ".png";
var diceImageName2 = "dice" + randomNumber2 + ".png";

// Update the src attribute of the first <img> element with the randomly selected image
document.querySelector(".img1").src = "images/" + diceImageName1;
document.querySelector(".img2").src = "images/" + diceImageName2;

console.log("diceImageName1 :"+ diceImageName1);
console.log("diceImageName2 :"+ diceImageName2);