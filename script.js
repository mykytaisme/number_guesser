
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, computer, target) => {
    humanGap = Math.abs(human - target);
    computerGap = Math.abs(computer - target);
    if (computerGap < humanGap) {
        return false;
    } else {
        return true; // accounts for the same guess
    }
}

const updateScore = (winner) => {
    if (winner == human) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}

console.log(compareGuesses(4, 7, 7));
