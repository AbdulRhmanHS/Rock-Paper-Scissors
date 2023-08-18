const gameText = document.querySelector('.gameText');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
let pscore = 0;
let cscore = 0;
gameText.textContent = "Choose Rock, Paper or Scissors!";
playerScore.textContent = `Your score: ${pscore}`;
computerScore.textContent = `Computer score: ${cscore}`;


function getComputerChoice()
{
    const computerDiv = document.querySelector('.ai');
    const img = computerDiv.querySelectorAll('img');

    //Choosing a random number from 0 to 2.
    let number = Math.floor(Math.random() * 3);

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('computerSelect');
    }


    if (number === 0) {
        //Make the computer icon bigger for 0.5s and returns it to normal.
        img[0].classList.add('computerSelect');
        img[0].addEventListener('transitionend', removeTransition);
        return "rock";
    }
    if (number === 1) {
        img[1].classList.add('computerSelect');
        img[1].addEventListener('transitionend', removeTransition);
        return "paper";
    }
    if (number === 2) {
        img[2].classList.add('computerSelect');
        img[2].addEventListener('transitionend', removeTransition);
        return "scissors";
    }
}


function getPlayerChoice(score)
{
    const playerDiv = document.querySelector('.player');
    const img = playerDiv.querySelectorAll('img');

    //Hover functionality.
    img.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        icon.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playerSelect');
    }

    //Selecting change the size of the player icon and returns it again to normal.
    img.forEach(icon => icon.addEventListener('click', function() {
        //Condition to terminate the clicking when the game is over.
        if (pscore < score && cscore < score) {
            this.classList.add('playerSelect');
            this.addEventListener('transitionend', removeTransition);
        }
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


async function game(score) {
    while (playerScore !== score || computerScore !== score) {
        let playerChoice = await getPlayerChoice(score);
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