// Generate a random number between 1 and 6 for each player
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Determine the file name of the dice image based on randomNumber1 and randomNumber2
var diceImageName1 = "dice" + randomNumber1 + ".png";
var diceImageName2 = "dice" + randomNumber2 + ".png";

// Update the src attribute of the <img> elements with the randomly selected images
document.querySelector(".img1").src = "images/" + diceImageName1;
document.querySelector(".img2").src = "images/" + diceImageName2;

// Determine the winner based on the higher random number
var res;
if (randomNumber1 > randomNumber2) {
    res = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    res = "Player 2 Wins!";
} 
else {
    res = "It's a tie!";
}
document.querySelector("h1").textContent = res;


// Log information to the console for debugging
console.log("Player 1: " + randomNumber1);
console.log("Player 2: " + randomNumber2);
console.log("Winner: " + res);
