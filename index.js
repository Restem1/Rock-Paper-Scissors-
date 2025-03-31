let humanScore = 0;
let computerScore = 0; 

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

function getHumanFunction(){
    let inputFromUser = prompt("Choose between [rock , paper , Scissors]").toLowerCase();
    return inputFromUser;   
}



function playerRound( humanChoice = getHumanFunction(),computerChoice = getComputerChoice()){
    
   if(humanChoice === computerChoice){
        return `your choice:"${humanChoice}" &  "${computerChoice}":computer choice ,are the same so its a tie`;
   }
   else if(( humanChoice=== "rock" && computerChoice === "scissors") || 
   (humanChoice === "scissors" && computerChoice === "paper") || 
   (humanChoice === "paper" && computerChoice === "rock")){
        humanScore++;
        return `your choice:"${humanChoice}" beats "${computerChoice}":computer choice`
   }
   else{
    computerScore++;
    return `computer choice: "${computerChoice}" beats "${humanChoice}":your choice`;
   }
   
  
  
}

function playGame(gameRound = prompt("how many round do you want to play")){
     
     for (var i = 0 ; i < gameRound; i++){
         let round= playerRound();
          console.log(round);
     }
     console.log(`Your score = ${humanScore}`);
   console.log(`computer Score = ${computerScore}`);
      
     if (humanScore > computerScore) {
          return "you won";
      } else if (computerScore > humanScore) {
          return "you have lost";
      } else {
          return "it's a tie";
      }
}
const result = playGame();

console.log(result);