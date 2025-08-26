const gameText = document.querySelector('.gameText');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const button = document.querySelector('button');
let pscore = 0; //Player score.
let cscore = 0; //Computer score.


gameText.textContent = "Choose Rock, Paper or Scissors!";
playerScore.textContent = `Your score: ${pscore}`;
computerScore.textContent = `Computer score: ${cscore}`;


function removeTransition(className) {
    return function(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove(className);
    }
}

function getComputerChoice()
{
    //Choosing a random number from 0 to 2.
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return "rock";
    }
    if (number === 1) {
        return "paper";
    }
    if (number === 2) {
        return "scissors";
    }
}

function playerRound(playerSelection, computerSelection)
{
    if (((playerSelection === "scissors") && (computerSelection === "paper"))
    || ((playerSelection === "paper") && (computerSelection === "rock"))
    || ((playerSelection === "rock") && (computerSelection === "scissors")))
    {
        gameText.textContent = `GOOD JOB!, ${playerSelection} beats ${computerSelection}.`;
        pscore += 1;
        playerScore.textContent = `Your score: ${pscore}`;
    }
    else if (playerSelection === computerSelection)
    {
        gameText.textContent = 'Draw!';
    }
    else
    {
        gameText.textContent = `OH NO!, ${computerSelection} beats ${playerSelection}.`;
        cscore += 1;
        computerScore.textContent = `Computer score: ${cscore}`;
    }
}


function game(score) {

    const img = document.querySelectorAll('.player img');

    function handlClick(e) {
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();
        playerRound(playerChoice, computerChoice);

        if (pscore === score || cscore === score) {

            // Terminate the clicking when the game is over
            img.forEach(icon => icon.removeEventListener('click', handlClick));

            if (pscore === score) {
                gameText.style.color = 'lightgreen';
                gameText.textContent = "Congrats! You Won!"
            }
            else if (cscore === score) {
                gameText.style.color = 'red';
                gameText.textContent = 'You lost!, you better win next time.'
            }
        }

        // Selecting change the size of the player icon
        this.classList.add('playerSelect');
        this.addEventListener('transitionend', removeTransition('playerSelect'));

        // Change the size of the chosen computer icon after clicking
        const computerIcon = document.querySelector(`.ai img:nth-child(${computerChoice === "rock" ? 1 : computerChoice === "paper" ? 2 : 3})`);
        computerIcon.classList.add('computerSelect');
        computerIcon.addEventListener('transitionend', removeTransition('computerSelect'));
    }

    img.forEach(icon => icon.addEventListener('click', handlClick));
}


game(5);

// Reset button.
button.addEventListener('click', function() {
    pscore = 0;
    cscore = 0;
    playerScore.textContent = `Your score: ${pscore}`;
    computerScore.textContent = `Computer score: ${pscore}`;
    gameText.textContent = "Choose Rock, Paper or Scissors!";
    gameText.style.color = '';
    game(5);
});

