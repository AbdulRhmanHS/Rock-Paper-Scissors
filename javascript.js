//First we need to make a function that gets random computer choice
//of rock, paper or scissors.
//We'll use a random number function that returns any number from 0, 1 and 2.
//if the number is 0 it will be siccsors, if the number is 1 it will paper,
//if the number is 2 it will be rock.
function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3);
    if (number === 0) return "Siccsors";
    if (number === 1) return "Paper";
    if (number === 2) return "Rock";
}
console.log(getComputerChoice());
//Then we need to make a function that operates the game at which it
//combines the player and computer input and declare the winner.
function playerRound(playerSelection, computerSelection)
{

}

//We'll make a game() function that makes the game last for 5 rounds.
function game()
{

}