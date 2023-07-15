//First we need to make a function that gets random computer choice
//of rock, paper or scissors.
//We'll use a random number function that returns any number from 0, 1 and 2.
//if the number is 0 it will be siccsors, if the number is 1 it will paper,
//if the number is 2 it will be rock.
function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3);
    if (number === 0) return "scissors";
    if (number === 1) return "paper";
    if (number === 2) return "rock";
}
//We need to take input form the player by a prompt function to write rock, 
//paper or sicssors.
//We'll make it as a function that returns the player input as a string.
//We need to make sure that this input is case insensitive to make the game
//more playable.
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
        return "error";
    }
}
//Then we need to make a function that operates the game at which it
//combares the player and computer input and declares the winner.

//The function will take two parameters one will be combared.

//We will make two conditions one to check the winning cases like when scissors beats
//paper and when paper beats rock and when rock beats scissors.

//the second one if both inputs are equal it will return draw.
//if nothing satisafied these two conditions it will return lose cases.
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
//We'll make a game() function that makes the game last for 5 rounds.
function game()
{

}