const gameText = document.querySelector('.gameText');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
let pscore = 0;
let cscore = 0;
gameText.textContent = "Choose Rock, Paper or Scissors!";
playerScore.textContent = `Your score ${pscore}`;
computerScore.textContent = `Computer score ${cscore}`;

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
        gameText.textContent = `GOOD JOB!, ${playerSelection} beats ${computerSelection}.`;
        pscore += 1;
        playerScore.textContent = `Your score ${pscore}`;
    }
    else if (playerSelection === computerSelection)
    {
        gameText.textContent = 'Draw!';
    }
    else
    {
        gameText.textContent = `OH NO!, ${computerSelection} beats ${playerSelection}.`;
        cscore += 1;
        computerScore.textContent = `Computer score ${cscore}`;
    }
}

async function game(score) {
    while (playerScore !== score || computerScore !== score) {
        let playerChoice = await getPlayerChoice();
        let computerChoice = getComputerChoice();
        playerRound(playerChoice, computerChoice);
        if (pscore === score) {
            gameText.style.color = 'lightgreen';
            gameText.textContent = "Congrats! You Won!"
            break;
        }
        else if (cscore === score) {
            gameText.style.color = 'red';
            gameText.textContent = 'You lost!, you better win next time.'
            break;
        }
    }
}

game(5);
 
