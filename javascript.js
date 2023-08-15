function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3);
    if (number === 0) return "scissors";
    if (number === 1) return "paper";
    if (number === 2) return "rock";
}


function getPlayerChoice()
{
    let c = prompt("Enter Rock, Paper or Scissors!", "");
    let inputCheck = c.toLowerCase();
    if ((inputCheck === "rock") || (inputCheck === "paper") || (inputCheck === "scissors"))
    {
        return inputCheck;
    }
    else
    {
        return "error"; //Validates the player input.
    }
}


function playerRound(playerSelection, computerSelection)
{
    if (((playerSelection === "scissors") && (computerSelection === "paper"))
    || ((playerSelection === "paper") && (computerSelection === "rock"))
    || ((playerSelection === "rock") && (computerSelection === "scissors")))
    {
        console.log(`You win!, ${playerSelection} beats ${computerSelection}.`);
    }
    else if (playerSelection === computerSelection)
    {
        console.log("Draw!");
    }
    else if (playerSelection === "error")
    {
        console.log("Type your choice correctly!");
    }
    else
    {
        console.log(`You lose!, ${computerSelection} beats ${playerSelection}.`);
    }
}


//Makes the game last for 5 rounds.
function game()
{
    for (let i = 0; i < 5; i++)
    {
        playerRound(getPlayerChoice(), getComputerChoice());
        if (i === 4) alert("Game Over!");
    }
}


//Executing the game.
//game();

const gameText = document.querySelector('.gameText');
gameText.textContent = "Choose Rock, Paper or Scissors!";