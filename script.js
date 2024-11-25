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

//let userInput = prompt("choose: rock, paper, or scissors").toLowerCase;
//to test:
let userInput = "rock";

function getHumanChoice() {
    if (userInput === "rock") {
        return "rock";
    } else if (userInput === "paper") {
        return "paper";
    } else if (userInput === "scissors") {
        return "scissors";
    } else (userInput !== null)
        return "ERROR";
};

//SCORE VARIABLES

let humanScore = 0;
let computerScore = 0;

//SINGLE ROUND


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    //rock & paper
    if (humanChoice === "rock" && computerChoice === "paper") {
        return computerScore++;
        console.log("You lose! Paper beats rock");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return humanScore++;
        console.log("You win! Paper beats rock");
    //scissors & paper
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return computerScore++;
        console.log("You lose! Scissors beats paper");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return humanScore++;
        console.log("You win! Scissors beats paper");
    //rock & scissors
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return computerScore++;
        console.log("You lose! Rock beats scissors");
    } else if (humanChoice === "rocks" && computerChoice === "scissors") {
        return humanScore++;
        console.log("You win! Rock beats scissors");
    //scissors & scissors
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return console.log("Tie! Try again.");
    //rock & rock
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        return console.log("Tie! Try again.");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return console.log("Tie! Try again.");
    } else (userInput !== null)
        return "ERROR - missing input";
};

console.log(playRound(humanChoice, computerChoice));