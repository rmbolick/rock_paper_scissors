let playerSelect;
let round_num = 1;
let player_score = 0;
let computer_score = 0;

function computerPlay(){
    let possibleVals = ['Rock','Paper','Scissors'];
    return possibleVals[Math.floor(Math.random() * 3)];

}

function getResult(){
    document.getElementById("player_score").innerHTML = `Player Score: ${player_score}`;
    document.getElementById("computer_score").innerHTML = `Computer Score: ${computer_score}`;
    document.getElementById("final_result").innerHTML = "";
    if (round_num === 5) {
        if (player_score>computer_score){
            document.getElementById("final_result").innerHTML = "You Win!";
        } else if (player_score<computer_score){
            document.getElementById("final_result").innerHTML = "You Lose!";
        } else {
            document.getElementById("final_result").innerHTML = "It's a tie!";
        }
        round_num = 1;
        player_score = 0;
        computer_score = 0;
    } else {
        round_num++;
    }
}

function setRoundPlay(round, player, computer){
    document.getElementById("round").innerHTML = `-------------Round ${round}/5-------------`;
    document.getElementById("player").innerHTML = `Player: ${player}`;
    document.getElementById("computer").innerHTML = `Computer: ${computer}`;
}


function setAsRock(){
    playerSelect = "Rock";
    computerSelection = computerPlay();
    setRoundPlay(round_num, playerSelect, computerSelection);
    if (computerSelection ==='Rock') {
        document.getElementById("output").innerHTML = "Draw! Rock ties Rock";
    } else if (computerSelection === 'Scissors') {
        document.getElementById("output").innerHTML = "You Win! Rock beats Scissors";
        player_score++;
    } else {
        document.getElementById("output").innerHTML = "You Lose! Paper beats Rock";
        computer_score++;
    }
    getResult();
}

function setAsPaper(){
    playerSelect = "Paper";
    computerSelection = computerPlay();
    setRoundPlay(round_num, playerSelect, computerSelection);
    if (computerSelection ==='Rock') {
        document.getElementById("output").innerHTML = "You Win! Paper beats Rock";
        player_score++;
    } else if (computerSelection === 'Scissors'){
        document.getElementById("output").innerHTML = "You Lose! Scissors beat Paper";
        computer_score++;
    } else {
        document.getElementById("output").innerHTML = "Draw! Paper ties Paper";
    }
    getResult();
}

function setAsScissors(){
    playerSelect = "Scissors";
    computerSelection = computerPlay();
    setRoundPlay(round_num, playerSelect, computerSelection);
    if (computerSelection ==='Rock') {
        document.getElementById("output").innerHTML = "You Lose! Rock beats Scissors";
        computer_score++;
    } else if (computerSelection === 'Scissors') {
        document.getElementById("output").innerHTML = "Draw! Scissors tie Scissors";
    } else {
        document.getElementById("output").innerHTML = "You Win! Scissors beat Paper";
        player_score++;
    }
    getResult();
}



        