
function getComputerChoice(){
    var randomChoice = Math.floor((Math.random()*3 )+ 1);
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
    let inputFromUser = prompt().toLowerCase();
    return inputFromUser;   
}



function playerRound( humanChoice = getHumanFunction(),computerChoice = getComputerChoice()){
    console.log(humanChoice);
    console.log(computerChoice);
   if(humanChoice === computerChoice){
        return "Its a tie";
   }
   else if(( humanChoice=== "rock" && computerChoice === "scissors") || 
   (humanChoice === "scissors" && computerChoice === "paper") || 
   (humanChoice === "paper" && computerChoice === "rock")){
        humanScore++;
        return "you won"
   }
   else{
    computerScore++;
    return "you lost"
   }
  
}