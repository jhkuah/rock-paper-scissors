var playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();

var computerChoice = Math.ceil(Math.random() * 3);

if (computerChoice <= 1) {
    computerChoice = "rock";
} else if (computerChoice <= 2 && computerChoice > 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}


function game(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It is a tie";
    }

    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            return "Player Wins";
        } else {
            return "Computer Wins";
        }
    }
    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer Wins";
        } else {
            return "Player Wins";
        }
    }
    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer Wins";
        } else {
            return "Player Wins";
        }
    }
}

game();
console.log(`You picked ${playerChoice} and the computer picked ${computerChoice}`);
console.log(game(playerChoice, computerChoice));