let playerSelect;
let round_num = 1;
let player_score = 0;
let computer_score = 0;

function computerPlay(){
    let possibleVals = ['Rock','Paper','Scissors'];
    return possibleVals[Math.floor(Math.random() * 3)];

}

function setAsRock(){
    playerSelect = "Rock";
    computerSelection = computerPlay();
    document.getElementById("round").innerHTML = `-------------Round ${round_num}/5-------------`;
    document.getElementById("player").innerHTML = `Player: ${playerSelect}`;
    document.getElementById("computer").innerHTML = `Computer: ${computerSelection}`;
    if (computerSelection ==='Rock') {
        document.getElementById("output").innerHTML = "Draw! Rock ties Rock";
    } else if (computerSelection === 'Scissors') {
        document.getElementById("output").innerHTML = "You Win! Rock beats Scissors";
        player_score++;
    } else {
        document.getElementById("output").innerHTML = "You Lose! Paper beats Rock";
        computer_score++;
    }
    
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

function setAsPaper(){
    playerSelect = "Paper";
    computerSelection = computerPlay();
    document.getElementById("round").innerHTML = `-------------Round ${round_num}/5-------------`;
    document.getElementById("player").innerHTML = `Player: ${playerSelect}`;
    document.getElementById("computer").innerHTML = `Computer: ${computerSelection}`;
    if (computerSelection ==='Rock') {
        document.getElementById("output").innerHTML = "You Win! Paper beats Rock";
        player_score++;
    } else if (player_score<computer_score){
        document.getElementById("output").innerHTML = "You Lose! Scissors beat Paper";
        computer_score++;
    } else {
        document.getElementById("output").innerHTML = "Draw! Paper ties Paper";
    }
    
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

function setAsScissors(){
    playerSelect = "Scissors";
    computerSelection = computerPlay();
    document.getElementById("round").innerHTML = `-------------Round ${round_num}/5-------------`;
    document.getElementById("player").innerHTML = `Player: ${playerSelect}`;
    document.getElementById("computer").innerHTML = `Computer: ${computerSelection}`;
    if (computerSelection ==='Rock') {
        document.getElementById("output").innerHTML = "You Lose! Rock beats Scissors";
        computer_score++;
    } else if (computerSelection === 'Scissors') {
        document.getElementById("output").innerHTML = "Draw! Scissors tie Scissors";
    } else {
        document.getElementById("output").innerHTML = "You Win! Scissors beat Paper";
        player_score++;
    }
    
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

function playRound(playerSelection, computerSelection){
    let playerVal = playerSelection.toLowerCase();
    let possibleVals = ['rock','paper','scissors'];
    if (possibleVals.includes(playerVal)) {
        if (playerVal === 'rock') {
            if (computerSelection ==='rock') {
                document.getElementById("output").innerHTML = "Draw! Rock ties Rock";
            } else if (computerSelection === 'scissors') {
                document.getElementById("output").innerHTML = "You Win! Rock beats Scissors";
            } else {
                document.getElementById("output").innerHTML = "You Lose! Paper beats Rock";
            }
        } else if (playerVal === 'scissors') {
            if (computerSelection ==='rock') {
                document.getElementById("output").innerHTML = "You Lose! Rock beats Scissors";
            } else if (computerSelection === 'scissors') {
                document.getElementById("output").innerHTML = "Draw! Scissors tie Scissors";
            } else {
                document.getElementById("output").innerHTML = "You Win! Scissors beat Paper";
            }
        } else {
            if (computerSelection ==='rock') {
                document.getElementById("output").innerHTML = "You Win! Paper beats Rock";
            } else if (computerSelection === 'scissors') {
                document.getElementById("output").innerHTML = "You Lose! Scissors beat Paper";
            } else {
                document.getElementById("output").innerHTML = "Draw! Paper ties Paper";
            }
        }
    } else {
        document.getElementById("output").innerHTML = "Invalid Play";
    }
}

function getWin(inp) {
    if (inp.includes("Win")){
        return 1;
    } else if (inp.includes("Lose")){
        return 0;
    } else {
        return 2;
    }
    
}

function game(rounds){
    let score_player=0;
    let score_computer=0;
    let curr_round=1;
    
    for (i=1; i<=rounds; i++) {
        
        let computerSelect = computerPlay();
        let result = playRound(playerSelect, computerSelect);
        document.getElementById("round").innerHTML = `-------------Round ${i}-------------`;
        document.getElementById("player").innerHTML = `Player: ${playerSelect}`;
        document.getElementById("computer").innerHTML = `${computerSelect}`;
        console.log(result);
        if (getWin(result) === 1){
            score_player++;
        } 
        if (getWin(result) === 0) {
            score_computer++;
        } 

        document.getElementById("player_score").innerHTML = `Player Score: ${score_player}`;
        document.getElementById("computer_score").innerHTML = `Computer Score: ${score_computer}`;
        if (i === rounds) {
            if (score_player>score_computer){
                document.getElementById("final_result").innerHTML = "You Win!";
            } else if (score_player<score_computer){
                document.getElementById("final_result").innerHTML = "You Lose!";
            } else {
                document.getElementById("final_result").innerHTML = "It's a tie!";
            }
        }
        

    }

}

        