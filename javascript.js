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
    const computerDiv = document.querySelector('.ai');
    const img = computerDiv.querySelectorAll('img');
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        img[0].classList.add('computerSelect');
        img[0].addEventListener('transitionend', (e) => {
            e.target.classList.remove('computerSelect');
        });
        return "rock";
    }
    if (number === 1) {
        img[1].classList.add('computerSelect');
        img[1].addEventListener('transitionend', (e) => {
            e.target.classList.remove('computerSelect');
        });
        return "paper";
    }
    if (number === 2) {
        img[2].classList.add('computerSelect');
        img[2].addEventListener('transitionend', (e) => {
            e.target.classList.remove('computerSelect');
        }); 
        return "scissors";
    }
}


function getPlayerChoice()
{
    const playerDiv = document.querySelector('.player');
    const img = playerDiv.querySelectorAll('img');
    //hoover functionality.
    img.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('hoover');
        });
        icon.addEventListener('mouseleave', function() {
            this.classList.remove('hoover');
        });
    });
    //selecting change the size of the icon and returns it again to normal.
    img.forEach(icon => icon.addEventListener('click', function() {
        this.classList.add('playerSelect');
        this.addEventListener('transitionend', (e) => {
            e.target.classList.remove('playerSelect');
        });
    }));
    return new Promise(resolve => {
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

 
