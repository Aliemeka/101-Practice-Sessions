/**
 *  
 * Rock, Paper, Scissor Game
 * Author: Emeka Allison
 * Game is a single player
 * User chooses a move and computer chooses a move at the same time
 * Works according to the rule of Rock-paper-scissor game
 * Win function for when the player wins
 * Lose function for when the player loses
 * And draw function if both player and computer makes the same choice
 * displays the score on scoreboard
 * 
 */


 //Declare the variables
let playerScore = 0; //Players score
let computerScore = 0; //Computer score


 //Get the clickable elements from the DOM

 //Scores
const playerDisScore = document.getElementById('player-score');
const computerDisScore = document.getElementById('computer-score');

//Choice div
const rockDiv = document.getElementById('rock-div');
const paperDiv = document.getElementById('paper-div');
const scissorDiv = document.getElementById('scissor-div');

// console.log(rockDiv)


//comment
const comment = document.getElementById("comment");


function game(move){
    let playerMove = move;
    //Give the computer a move
    let computerMove = simComputerMove();
    
    console.log({playerMove, computerMove});

    if(playerMove === computerMove){
        draw(playerMove);
        paintBorder(playerMove, 'yellow');
    }else{
        let moves = playerMove + computerMove;
        if (moves === "rs" ||moves === "pr" || moves ==="sp" ){
            win(moves);
            paintBorder(playerMove, 'green');
        }
        else{
            lose(playerMove, computerMove);
            paintBorder(playerMove, 'red');
        } 
    }

    playerDisScore.innerHTML = playerScore;
    computerDisScore.innerHTML = computerScore;
}

//Color the selected element border
function paintBorder(plMove, color){
    switch(plMove){
        case 'r':
            rockDiv.classList.add(color);
            setTimeout(() => {
                rockDiv.classList.remove(color)
            }, 500);
            break;
        case 'p':
            paperDiv.classList.add(color);
            setTimeout(() => {
                paperDiv.classList.remove(color)
            }, 500);
            break;
        case 's':
            scissorDiv.classList.add(color);
            setTimeout(() => {
                scissorDiv.classList.remove(color)
            }, 500);
            break;
        
        default:
            break;

    }

    
}


//Find out when the player draws
function draw(plMove){
    let message = "Draw! ";


    switch(plMove){
        case 'r':
            message += "Both you and computer chose rock";
            break;

        case 's':
            message += "Both you and computer chose scissor";
            break;

        case 'p':
            message += "Both you and computer chose paper";
            break;

        default:
            break;
    }
    
    comment.innerHTML = message;
}

//Find out when the player wins
function win(moves){
    // console.log(moves);
    playerScore += 1;
    let message = "You win!!! ";

    switch(moves){
        case 'rs':
            message += "Your Rock breaks Computer's Scissor!"
            break;
        case 'pr':
            message += "Your Paper covers Computer's Rock!"
            break;
        case 'sp':
            message += "Your Scissors cuts Computer's Paper!"
            break;
        default:
            break;
    }

    comment.innerHTML = message;
}

//Find out when the player loses
function lose(plMove, compMove){
    computerScore += 1;
    let moves = plMove + compMove;
    // console.log(moves);
    let message = "You lose!!! ";

    switch(moves){
        case 'sr':
            message += "Computer's Rock breaks Your Scissor!"
            break;
        case 'rp':
            message += "Computer Paper covers Your Rock!"
            break;
        case 'ps':
            message += "Computer Scissors cuts Your Paper!"
            break;
        default:
            break;
    }

    comment.innerHTML = message;
}


 //Get the players move
rockDiv.addEventListener('click', function (){ 
    game('r');
});

paperDiv.addEventListener('click', function (){ 
    game('p');
});

scissorDiv.addEventListener('click', function (){ 
    game('s');
});

//Give the computer a move
function simComputerMove(){
    const POSSIBLE_MOVES = ['r', 'p', 's'];
    let generatedNumber = Math.floor(Math.random()*3);
    return POSSIBLE_MOVES[generatedNumber];
}



