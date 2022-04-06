const symbols = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerChoice(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

function playerCheck(){
    let flag
    let choice;
    do{
        flag=false;
        choice = prompt("Rock, paper or scissors?: ");
        if((choice ==="")){
            console.log("Answer cannot be empty!");
            flag=true;
        }
        else if((choice.toLowerCase() !== symbols[0]) && (choice.toLowerCase() !== symbols[1]) && (choice.toLowerCase() !== symbols[2])){
            console.log("Please insert a vaild answer!");
            flag=true;
        }

    }while(flag);

    return choice.toLowerCase();
}

function singleRound(player, computer){
    const playerScoresString = "Player Scores!\n";
    const computerScoresString = "Computer Scores!\n";
    const tie= "Tie!\n";

    if((player === symbols[0])&&(computer === symbols[2])){
        playerScore++;
        return playerScoresString;
    }
    else if((player === symbols[1])&&(computer === symbols[0])){
        playerScore++;
        return playerScoresString;
    }
    else if((player === symbols[2])&&(computer === symbols[1])){
        playerScore++;
        return playerScoresString;
    }
    else if(player === computer){
        return tie;
    }
    else{
        computerScore++;
        return computerScoresString;
    }
}

function game(){
   
    //Cycle to play 5 rounds
    for(let i=0; i<5; i++){
        let playerChoice = playerCheck();
        let CPUChoice = computerChoice(symbols);
        console.log(`Player choice: ${playerChoice}\n Computer Choice: ${CPUChoice}`);
        console.log(singleRound(playerChoice, CPUChoice));
        console.log(`Player Score:${playerScore}\nComputer Score:${computerScore}`);
    }

    //Logic to decide who won the game
    if(playerScore>computerScore){
        console.log("Player Wins!");
    }
    else if(computerScore>playerScore){
        console.log("Computer Wins!");
    }
    else if(playerScore == computerScore){
        console.log("Tie!");
    }
}

game();

/*let CPUChoice = computerChoice(symbols);

console.log(`Player choice: ${playerChoice}\nComputer Choice: ${CPUChoice}`);
console.log(singleRound(playerChoice, CPUChoice));*/