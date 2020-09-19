const O_CLASS = 'o';
const X_CLASS = 'x';
let playerTwoTurn;
const gameGrid = document.getElementById('game-grid'); //get the game grid 
const cellElements = document.querySelectorAll('[data-cell]'); //query all the cells
const winOverlay = document.getElementById('win-overlay');
const winMessage = document.getElementById('win-message');
const restartButton = document.getElementById('restart');
let draw;
const themeButton = document.getElementById('theme-button');

const WINNING_COMBINATIONS = [
    // Horinzontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //Verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //Diagonals
    [0, 4, 8],
    [2, 4, 6],
]


startGame()

themeButton.addEventListener('click', ()=>{
    setTimeout(() => document.body.classList.toggle('dark-mode'), 400);
})
restartButton.addEventListener('click', ()=>{
    startGame()
});

function startGame(){
    playerTwoTurn = false;
    gameGrid.classList.add(X_CLASS);
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    winOverlay.classList.remove('show')
}

function handleClick(e){
    const cell = e.target;
    const currentClass = playerTwoTurn ? O_CLASS : X_CLASS;

   //place mark
   placeMark(cell, currentClass);

   //check for win
   if(checkWin(currentClass)){
        draw = false;
        showResult(draw);
   } else if(isDraw()){
       draw = true;
       showResult(draw)
   }else{
     //switch turns
    swapTurns()
    setBoardHoverClass()
   }

   //check for draw
}

const placeMark = (cell, currentClass) =>{
    cell.classList.add(currentClass);
}

 
const swapTurns = () =>{
    playerTwoTurn = !playerTwoTurn;
}

const setBoardHoverClass = () =>{
    gameGrid.classList.remove(O_CLASS);
    gameGrid.classList.remove(X_CLASS);

    if(playerTwoTurn){
        gameGrid.classList.add(O_CLASS);
    } else{
        gameGrid.classList.add(X_CLASS);
    }
}

const checkWin = currentClass => {
    return WINNING_COMBINATIONS.some(combination =>{
        return combination.every(index =>{
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

const isDraw = () => {
    const cells = [...cellElements];
    return cells.every(cell => cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS));
}

const showResult = draw => {
    winOverlay.classList.add('show')
    if (draw){
        winMessage.innerHTML = "Draw!"
    }else{
        const winningPlayer = playerTwoTurn ? 'Player 2' : 'Player 1'
        winMessage.innerHTML = `${winningPlayer} wins!`
    }
}


