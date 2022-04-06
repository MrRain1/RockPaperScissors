const symbols = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let tieStatus=false;

function computerChoice(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

function playerCheck(){
    //flag to set the exit from the cycle
    let flag; 
    //variable to insert the player choice
    let choice; 

    do{
        flag=false;
        choice = prompt("Rock, paper or scissors?: ");

        //verify that the user didn't input an empty string
        if((choice ==="")){
            console.log("Answer cannot be empty!");
            flag=true;
        }

        //verify that the string matches with a valid, case insensitive, answer 
        else if((choice.toLowerCase() !== symbols[0]) && (choice.toLowerCase() !== symbols[1]) && (choice.toLowerCase() !== symbols[2])){
            console.log("Please insert a vaild answer!");
            flag=true;
        }

    }while(flag);

    //return the case insensitive choice
    return choice.toLowerCase();
}

function singleRound(player, computer){
    const playerScoresString = "Player Scores!\n";
    const computerScoresString = "Computer Scores!\n";
    const tie= "Tie!\n";
    tieStatus=false;

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
        tieStatus=true;
        return tie;
    }
    else{
        computerScore++;
        return computerScoresString;
    }
}

function game(){
   let turnNumber = 0;

    //Cycle until one player reaches 5 points
    do{

        //show the turn number
        turnNumber++;
        console.log(`Turn: ${turnNumber}`);

        //insert player choice
        let playerChoice = playerCheck();
        //insert CPU choice
        let CPUChoice = computerChoice(symbols);

        //Shows bot choices
        console.log(`Player choice: ${playerChoice}\nComputer Choice: ${CPUChoice}`);

        //decide the winner of the tutn
        console.log(singleRound(playerChoice, CPUChoice));

        //show the players scores
        console.log(`Player Score:${playerScore}\nComputer Score:${computerScore}`);
    }while((playerScore < 5) && (computerScore < 5));

    //Logic to decide who won the game
    if(playerScore>computerScore){
        console.log("Player Wins!");
    }
    else{
        console.log("Computer Wins!");
    }
}

game();

/*let CPUChoice = computerChoice(symbols);

console.log(`Player choice: ${playerChoice}\nComputer Choice: ${CPUChoice}`);
console.log(singleRound(playerChoice, CPUChoice));*/
