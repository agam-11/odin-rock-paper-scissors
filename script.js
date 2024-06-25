let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const resultsDiv = document.querySelector("#results");
const scoreCounter = document.querySelector("#score-counter");

function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  if (randomNum < 33) {
    return "rock";
  } else if (randomNum >= 33 && randomNum < 66) {
    return "paper";
  } else return "scissors";
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice");
  humanChoice = humanChoice.toLowerCase();
  if (
    humanChoice == "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissors"
  ) {
    return humanChoice;
  } else {
    alert("Invalid choice, try again");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    resultsDiv.textContent = `Tie, both players chose ${humanChoice}`;
    // console.log(`Tie, both players chose ${humanChoice}`);
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    resultsDiv.textContent = `You win! Rock beats Paper`;
    // console.log(`You win! Rock beats Paper`);
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    resultsDiv.textContent = "You lose! Rock beats Paper";
    // console.log("You lose! Rock beats Paper");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    resultsDiv.textContent = "You win! Scissors beats paper";
    // console.log(`You win! Scissors beats paper`);
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    resultsDiv.textContent = "You lose! Scissors beats Paper";
    // console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    resultsDiv.textContent = `You win! Rock beats Scissors`;
    // console.log(`You win! Rock beats Scissors`);
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    resultsDiv.textContent = "You lose! Rock beats Scissors";
    // console.log("You lose! Rock beats Scissors");
    computerScore++;
  }
  scoreCounter.textContent = `you: ${humanScore}, computer: ${computerScore}`;
  if (humanScore == 5) {
    scoreCounter.textContent = "You won!";
    computerScore = 0;
    humanScore = 0;
  } else if (computerScore == 5) {
    scoreCounter.textContent = "You lost!";
    computerScore = 0;
    humanScore = 0;
  }
}

rockButton.addEventListener("click", (e) => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", (e) => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", (e) => {
  playRound("scissors", getComputerChoice());
});

// scoreCounter.textContent = humanScore;

// function playGame() {
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());

//   if (humanScore > computerScore) {
//     console.log(
//       `You won the game, yay, you won by ${humanScore - computerScore} points`
//     );
//   } else {
//     console.log(
//       `You lost hahahha, computer won by ${computerScore - humanScore} points`
//     );
//   }
// }

// playGame();
