function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0){
        return("rock");
    }
    else if (randomNum ===1){
        return("paper");
    }
    else if (randomNum === 2){
        return("scissors");
    }
}
function getHumanChoice(){
    let input = prompt("rock, paper, scissors?").toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors"){
        return(input);
        }
    else{
        alert("not a valid input!");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (humanSelection === computerSelection){
        console.log("it's a tie!");
        }
    else if ((humanSelection === "rock" && computerSelection == "paper") || (humanSelection === "paper" && computerSelection == "scissors") || (humanSelection === "scissors" && computerSelection === "rock")){
        console.log("you lose " + computerSelection + " beats " + humanSelection + "!");  
        computerScore++;
    }
    else{
        console.log("you win! " + humanSelection + " beats " + computerSelection + "!");  
        humanScore++;
    }
    }
function playGame(){
    for (let i = 0; i < 5; i++){
        playRound();
    }
    if (humanScore > computerScore){
    console.log("the score is human: " + humanScore + " computer: " + computerScore + " - you win!");
    }
    else{
    console.log("the score is human: " + humanScore + " computer: " + computerScore + " - you win!");

    }
}  
playGame();