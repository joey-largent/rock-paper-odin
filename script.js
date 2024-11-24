//computer choice

//first we generate a random number between 1-3
function getRandomNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

//then we need to make a conditional statement to link the numbers with strings for R, P, and S
