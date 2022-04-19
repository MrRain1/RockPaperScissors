const symbols = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let tieStatus=false;

const buttons = document.querySelectorAll(`button`);


function computerChoice(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

