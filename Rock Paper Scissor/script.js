// const of min and max for random number generator
const min = 1;
const max = 3;

// Random number between 1 - 3
var computerSelection = Math.floor(Math.random() * (max - min +     1) + min);

console.log(computerSelection);

// Computer selection matching value to a name
if (computerSelection === 1) {  
    computerSelection = "rock";
} 
else if (computerSelection === 2) {
    computerSelection = "paper";
} 
else if (computerSelection === 3) {
    computerSelection = "scissors";
}


//Prompt for player to select their hand
var playerSelection = prompt("Let's play rock, paper scissor.  Select your hand. Enter 'Rock','Paper' or 'Scissors.").toLowerCase();


// Confirm players selection matches criteria required
if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {

    // true
    console.log(true);
} 
else if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {

    // Player has one chance to return a correct response
    playerSelection = prompt("You entered a wrong selection.  Please try again.  Select your hand. Enter 'Rock','Paper' or 'Scissors.").toLowerCase();
} 
else {

    // Game is over.  Too many incorrect responses
    alert("GAME OVER! You entered too many incorrect responses.  Have a great day!");
}


// Game Logic
if (computerSelection == playerSelection) {
    alert("CPU: " + computerSelection.toUpperCase() + " | Player: " + playerSelection.toUpperCase() + "  It's a TIE!")
} 
else if (computerSelection === "rock" && playerSelection === "paper"){
    alert("CPU: ROCK | Player: PAPER  You've WON!");
}
else if (computerSelection === "paper" && playerSelection === "rock") {
    alert("CPU: PAPER | Player: ROCK  You've LOST!");
}
else if (computerSelection === "rock" && playerSelection === "scissors") {
    alert("CPU: ROCK | Player: SCISSORS  You've LOST!");
}
else if (computerSelection === "scissors" && playerSelection === "rock") {
    alert("CPU: SCISSORS | Player: ROCK  You've WON!");
}
else if (computerSelection === "scissors" && playerSelection === "paper") {
    alert("CPU: SCISSORS | Player: PAPER  You've LOST!");
}
else if (computerSelection === "paper" && playerSelection === "scissors") {
    alert("CPU: PAPER | Player: SCISSORS  You've WON!");
}


