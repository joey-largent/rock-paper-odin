//COMPUTER CHOICE

//generates a random number between 1-3
function getRandomNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
};

//links the numbers with strings for R, P, and S
//links the two functions using "number"
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

//creates prompt for user to enter one of the values
//return the choice or error to the system

//uncomment below to allow prompt for a real human
//let userInput = prompt("choose: rock, paper, or scissors").toLowerCase;

//for test, human-simulated variables
const testInputs = ["rock", "rock", "scissors", "paper", "scissors"];
let testCount = 0;
let userInput = testInputs[testCount];

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

//PLAY GAME

//plays "playround" 5 times
//keeps track of scores
//tests the highest score AFTER five rounds and declares a winner
//after each round, prompts the human to input a new choice
//after each round, declares who won the round AND their current score
//after five rounds, the game declares the winner, and resets

function playGame () {
    //plays 5 rounds of game, reprompts user after each round, check for valid response and then exits loop when valid

    for (let round = 1; round <= 5; round++) {
        let validInput = false;
        while (!validInput) {
            //line below allows prompt for user
            //userInput = prompt(`Round ${round}: choose rock, paper, or scissors!`).toLowerCase();

            //test ONLY inputs to simulate the human
            userInput = testInputs[testCount++];

            if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
                validInput = true;
            } else {
                console.log("Invalid input! Please choose rock, paper, or scissors");
            }
        }

        //makes the functions above variables
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        //collects choices and prints them to the console
        const result = playRound(humanChoice, computerChoice);
        console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
        console.log(`Round ${round} result: ${result}`);
        console.log(`Scores: Human ${humanScore}, Computer ${computerScore}`);
    };

    //checks score for who wins after 5 rounds
    if (humanScore > computerScore) {
        console.log("You win! You beat the computer!");
    } else if (humanScore < computerScore) {
        console.log("You lose! Dumb human, ahahahaha!");
    } else if (humanScore === computerScore)
        console.log("Oha! Is that a tie that just occured??");
};

//reset scores
humanScore = 0;
computerScore = 0;

//runs a single round, using RPS logic
function playRound(humanChoice, computerChoice) {
    //rock & paper
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats rock";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock";
    //scissors & paper
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper";
    //rock & scissors
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors";
    //same input or error
    } else if (humanChoice === computerChoice) {
        return "Tie! Try again.";
    } else (userInput !== null)
        return "ERROR - invalid input";
};

playGame();