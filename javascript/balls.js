function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
const robot = getComputerChoice();
let computerSection = "balls";

if(robot == 0) {
     computerSection = "rock";

} else if (robot == 1) {
    computerSection = "paper";

} else if(robot == 2) {
    computerSection = "Scissors";
}

function game(playerSection) {
    if(playerSection == "rock" && computerSection == "rock"){
        console.log("Its a tie");
    } else if(playerSection == "rock" && computerSection == "paper") {
        console.log("You will lose");
    } else if (playerSection == "rock" && computerSection == "Scissors") {
        console.log("You win");
    } else if(playerSection == "paper" && computerSection == "rock") {
        console.log("You win");
    } else if(playerSection == "paper" && computerSection == "paper") {
        console.log("Its a tie");
    } else if (playerSection == "paper" && computerSection == "Scissors") {
        console.log("You will lose");
    } else if(playerSection == "Scissors" && computerSection == "rock") {
        console.log("You will lose");
    } else if(playerSection == "Scissors" && computerSection == "paper") {
        console.log("You win");
    } else if(playerSection == "Scissors" && computerSection == "Scissors") {
        console.log("Its a tie");
    } else {
        console.log("dipshit, pick one of those");
    }
}
var userBalls = prompt("Entire rock, paper, or Scissors").toLowerCase();
game(userBalls);
console.log("you picked " + userBalls + " the computer picked " + computerSection);