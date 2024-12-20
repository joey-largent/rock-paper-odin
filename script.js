//Note: would like to have a button that translates all game UI to Turkish
//need to store human previous choice after clicking (rock remains highlighted)
//Would also like to have pop sound effects when you push the buttons

// UI
const btnDiv = document.querySelector(".btnDiv");
const body = document.querySelector("body");

const roundHead = document.createElement("h1");
const roundAnnounce = document.createElement("p");
roundHead.textContent = "ROUND: 1 of 5";
roundHead.classList.add("round-head");
roundAnnounce.textContent = "";
body.prepend(roundHead);

const rock = document.createElement("button");
rock.textContent = "ROCK";
rock.classList.add("rock-btn");
btnDiv.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "PAPER";
paper.classList.add("paper-btn");
btnDiv.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
scissors.classList.add("scissors-btn");
btnDiv.appendChild(scissors);


const humanDiv = document.createElement("div");
const humanPointsHead = document.createElement("h1");
humanPointsHead.textContent = "HUMAN: 0";
humanPointsHead.classList.add("hum-head");

const compChoiceDiv = document.createElement("div");
const compChoiceAnnounce = document.createElement("h1")
const compChoice = document.createElement("p");
compChoiceAnnounce.textContent = "COMPUTER CHOSE:";
compChoiceAnnounce.classList.add("comp-choice-announce");
compChoice.classList.add("comp-choice");
compChoice.textContent = "Waiting...";
body.appendChild(compChoiceDiv);
compChoiceDiv.appendChild(compChoiceAnnounce);
compChoiceDiv.appendChild(compChoice);


const compDiv = document.createElement("div");
const compPointsHead = document.createElement("h1");
compPointsHead.textContent = "COMPUTER: 0";
compPointsHead.classList.add("comp-head");

body.appendChild(humanDiv);
body.appendChild(compDiv);
humanDiv.appendChild(humanPointsHead);
compDiv.appendChild(compPointsHead);

//GAME VARIABLES
let round = 1;
let humanScore = 0;
let computerScore = 0;

function updateRoundDisplay() {
    roundHead.textContent = `ROUND: ${round} of 5`;
}

function updateScores() {
    humanPointsHead.textContent = `HUMAN: ${humanScore}`;
    compPointsHead.textContent = `COMPUTER: ${computerScore}`;
}

function showRoundResult(result) {
    const roundResult = document.querySelector('.round-result');
    if (!roundResult) {
        const newResult = document.createElement('p');
        newResult.classList.add('round-result');
        newResult.textContent = result;
        body.appendChild(newResult);
    } else {
        roundResult.textContent = result;
    }
}



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

//for auto test, human-simulated variables
//const testInputs = ["rock", "rock", "scissors", "paper", "scissors"];
//let testCount = 0;
//let userInput = testInputs[testCount];

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
        //ensures user input matches the input of all possible human inputs
        let validInput = false;
        while (!validInput) {
            //line below allows prompt for user at the beginning of each round
            //comment out when using autotest
            userInput = prompt(`Round ${round}: choose rock, paper, or scissors!`).toLowerCase();

            //for autotest ONLY, inputs to simulate the human (comment out if not testing)
            //userInput = testInputs[testCount++];

            //tests user input for validity
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
        console.log("You win the game!! You beat the computer!");
    } else if (humanScore < computerScore) {
        console.log("You lose!! The computer beat you :)");
    } else if (humanScore === computerScore)
        console.log("It's a tie!! Play again?");
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


//console.log(playGame());
