//COMPUTER CHOICE

//first we generate a random number between 1-3
function getRandomNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
};

//then we need to make a conditional statement to link the numbers with strings for R, P, and S
//we also need to link the two functions using "number"
function getComputerChoice () {
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

//