const gameText = document.querySelector('.gameText');
gameText.textContent = "Choose Rock, Paper or Scissors!";

function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {console.log("Computer choosed rock"); return "rock";}
    if (number === 1) {console.log("Computer choosed paper"); return "paper";}
    if (number === 2) {console.log("Computer choosed scissors"); return "scissors";}
}


function getPlayerChoice()
{
    return new Promise(resolve => {
        const playerDiv = document.querySelector('.player');
        const img = playerDiv.querySelectorAll('img');
        img.forEach(icon => icon.addEventListener('click', () => {
            resolve(icon.id);
        }));
    });
}


function playerRound(playerSelection, computerSelection)
{
    if (((playerSelection === "scissors") && (computerSelection === "paper"))
    || ((playerSelection === "paper") && (computerSelection === "rock"))
    || ((playerSelection === "rock") && (computerSelection === "scissors")))
    {
        gameText.textContent = `You win!, ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === computerSelection)
    {
        gameText.textContent = 'Draw!';
    }
    else
    {
        gameText.textContent = `You lose!, ${computerSelection} beats ${playerSelection}.`;
    }
}

async function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = await getPlayerChoice();
        let computerChoice = getComputerChoice();
        playerRound(playerChoice, computerChoice);
        if (i === 4) gameText.textContent += ' Game Over!';
    }
}

game();
 
