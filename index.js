
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
let humanScore = 0;
let computerScore = 0; 
function getHumanFunction(){
    var inputFromUser = prompt().toLowerCase();
    
}
const humanChoice = getHumanFunction();
const computerChoice = getComputerChoice();
function playerRound(humanChoice , computerChoice){
    
   if(humanChoice === computerChoice){
        return "Its a tie";
   }
   else if((userChoice === "Rock" && computerChoice === "Scissors") || 
   (userChoice === "Scissors" && computerChoice === "Paper") || 
   (userChoice === "Paper" && computerChoice === "Rock")){
        humanScore++;
        return "you won"
   }
   else{
    computerScore++;
    return "you lost"
   }
}