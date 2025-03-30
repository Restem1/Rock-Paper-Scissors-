
function getComputerChoice(){
    var randomChoice = Math.floor(Math.random()*3) + 1;
    let computerChoice;
    if(randomChoice === 1){
         computerChoice = "rock";
    }
    else if (randomChoice === 2){
         computerChoice = "paper";
    }
    else{
          computerChoice = "scissors";
    }
    return computerChoice;
}
console.log(getComputerChoice());