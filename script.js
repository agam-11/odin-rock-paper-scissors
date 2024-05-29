let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    if (randomNum < 33){
        return "rock";
    }
    else if (randomNum >= 33 && randomNum < 66){
        return "paper";
    }
    else return "scissors";
}

function getHumanChoice(){
    let humanChoice = prompt('Enter your choice');
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors'){
        return humanChoice;
    }
    else {
        alert('Invalid choice, try again');  
        return getHumanChoice();
    }   
}


function playRound (humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log(`Tie, both players chose ${humanChoice}`);
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper'){
        console.log(`You win! Rock beats Paper`);
        humanScore++;
    } 
    else if (humanChoice == 'paper' && computerChoice == 'rock'){
        console.log('You lose! Rock beats Paper')
        computerScore++;
    }

    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log(`You win! Scissors beats paper`);
        humanScore++;
    } 
    else if (humanChoice == 'paper' && computerChoice == 'scissors'){
        console.log('You lose! Scissors beats Paper')
        computerScore;
    }

    else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log(`You win! Rock beats Scissors`);
        humanScore++;
    } 
    else if (humanChoice == 'scissors' && computerChoice == 'rock'){
        console.log('You lose! Rock beats Scissors');
        computerScore++;
    }
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore){
        console.log(`You won the game, yay, you won by ${humanScore-computerScore} points`)
    }
    else {
        console.log(`You lost hahahha, computer won by ${computerScore-humanScore} points`)
    }
}

playGame();