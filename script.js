//Note: would like to have a button that translates all game UI to Turkish
//need to store human previous choice after clicking (rock remains highlighted)
//Would also like to have pop sound effects when you push the buttons

// HTML ELEMENTS
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

//GAME UI
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

btnDiv.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('rock-btn')) {
        handleHumanChoice('rock');
    } else if (target.classList.contains('paper-btn')) {
        handleHumanChoice('paper');
    } else if (target.classList.contains('scissors-btn')) {
        handleHumanChoice('scissors');
    }
});

function handleHumanChoice(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    compChoice.textContent = computerChoice.toUpperCase();
    showRoundResult(result);
    updateScores();

    if (round === 5) {
        showGameOver();
    } else {
        round++;
        updateRoundDisplay();
    }
}

function showGameOver() {
    btnDiv.style.display = 'none';
    roundHead.style.display = 'none';
    humanDiv.style.display = 'none';
    compDiv.style.display = 'none';
    compChoiceDiv.style.display = 'none';

    const gameOverDiv = document.createElement('div');
    gameOverDiv.style.textAlign = 'center';
    gameOverDiv.style.marginTop = '50px';
    gameOverDiv.style.color = '#f1e1ae';

    const winnerText = humanScore > computerScore
        ? "Congratulations, You Win!"
        : humanScore < computerScore
        ? "Sorry, Computer Wins!"
        : "It's a Tie!";
    gameOverDiv.innerHTML = `
        <h1>${winnerText}</h1>
        <button id="play-again" style="font-size: 2rem; margin-top: 20px;">Play Again</button>
    `;
    body.appendChild(gameOverDiv);

    document.getElementById('play-again').addEventListener('click', resetGame);
}

function resetGame() {
    round = 1;
    humanScore = 0;
    computerScore = 0;

    updateRoundDisplay();
    updateScores();
    btnDiv.style.display = 'flex';
    roundHead.style.display = 'block';
    humanDiv.style.display = 'block';
    compDiv.style.display = 'block';
    compChoiceDiv.style.display = 'block';

    const gameOverDiv = document.querySelector('div:last-child');
    gameOverDiv.remove();
}


//COMPUTER CHOICE

function getRandomNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
};


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

//GAME

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