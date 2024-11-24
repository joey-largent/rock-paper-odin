//COMPUTER CHOICE

//generate a random number between 1-3
function getRandomNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
};

//link the numbers with strings for R, P, and S
//link the two functions using "number"
function getComputerChoice() {
    let number = getRandomNum();
    if (number === 1) {
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else if (number === 3) {
        return "scissors";
    } else {
        return "unknown error";
    }
};


//HUMAN CHOICE

//create prompt for user to enter one of the values
//return the choice or error to the user

const userInput = prompt("choose: rock, paper, or scissors");

function getHumanChoice() {
    if (userInput === "rock") {
        return "you chose ROCK";
    } else if (userInput === "paper") {
        return "you chose PAPER";
    } else if (userInput === "scissors") {
        return "you chose SCISSORS";
    } else (userInput !== null)
        return "ERROR - check spelling / missing input";
};

//SCORE VARIABLES

let humanScore = 0;
let computerScore = 0;
