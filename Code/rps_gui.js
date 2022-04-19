const symbols = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let tieStatus=false;

const choiceButtons = document.querySelectorAll(`.choice`);
const resetButton = document.querySelector(`.resetGame`);

//Event Listeners for the buttons
choiceButtons.forEach(button => button.addEventListener(`click`, playRound));
resetButton.addEventListener("click", resetGame);


//Resets the game status
function resetGame(){
    //Reset player score
    playerText = document.querySelector(`#playerScore`);
    playerScore = 0;
    playerText.innerHTML = `${playerScore}`;

    cpuText = document.querySelector(`#computerScore`);
    computerScore = 0;
    cpuText.innerHTML = `${computerScore}`;

    const messageBox = document.querySelector(`.scoreMessage`);
    messageBox.innerHTML = ``;
}

function computerChoice(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

function playRound(e){
    const playerChoice = e.srcElement.dataset.choice;
    roundCheck(playerChoice);
}

function roundCheck(choice){
    const computer = computerChoice(symbols);
    const playerScoresString = "Player Scores!\n";
    const computerScoresString = "Computer Scores!\n";
    const tie= "Tie!\n";
    
    if((playerScore < 5) && (computerScore < 5)){
        if((choice === symbols[0])&&(computer === symbols[2])){
            playerScore++;
            addPointPlayer();
            printMessage(playerScoresString);
        }
        else if((choice === symbols[1])&&(computer === symbols[0])){
            playerScore++;
            addPointPlayer();
            printMessage(playerScoresString);
        }
        else if((choice === symbols[2])&&(computer === symbols[1])){
            playerScore++;
            addPointPlayer();
            printMessage(playerScoresString);
        }
        else if(choice === computer){
            tieStatus=true;
            printMessage(tie);
        }
        else{
            computerScore++;
            addPointCPU();
            printMessage(computerScoresString);
        }
        verifyGameEnd();
    }
}

function verifyGameEnd(){
    if(!((playerScore < 5) && (computerScore < 5))){
        if(playerScore>computerScore){
            printMessage("Player Wins!");
        }
        else{
            printMessage("Computer Wins!");
        }
    }
}

function addPointPlayer(){
    //Set and refresh player Score
    playerText = document.querySelector(`#playerScore`);
    playerText.innerHTML = `${playerScore}`;
}

function addPointCPU(){
    //Set and refresh player Score
    playerText = document.querySelector(`#computerScore`);
    playerText.innerHTML = `${computerScore}`;
}

function printMessage(message){
    const messageBox = document.querySelector(`.scoreMessage`);
    messageBox.innerHTML = message;
}

//Test Functions
/*function logButton(e){
    console.log(e.srcElement.dataset.choice);
}*/

