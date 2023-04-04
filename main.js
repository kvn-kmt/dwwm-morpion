const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X'; 
const playerTwo = 'O';
let playerTurn = playerOne;

const winningPatterns = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,4,6]
];

cells.forEach(cell => {
        cell.addEventListener('click', playGame, { once: true });
});

function playGame(e) {
    e.target.innerHTML = playerTurn;

    if (checkWin(playerTurn)) {
        updateGameStatus("wins" + playerTurn);
        return endGame();
    } else if (checkDraw()) {
        updateGameStatus("draw");
        return endGame();
    }

    updateGameStatus(playerTurn); 
    playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}

function checkWin(playerTurn) {
    return winningPatterns.some(comnbination => {
        return comnbination.every(index =>  {
            return cells[index].innerHTML == playerTurn;
        }); 
    }); 
}

function checkDraw() {
    return [...cells].every(cell => {
        return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
    });
}

function updateGameStatus(status){
    let statusText;

    switch (status) {
        case 'X': 
            statusText = "Joueur 2 (O), à ton tour !";
            break;
        case 'O':
            statusText = "Joueur 1 (X), c'est à toi !";
            break;
        case 'winsX':
            statusText = "Victoire du Joueur 1 (X) !";
            break;   
        case 'winsO':
            statusText = "Victoire du Joueur 2 (O) !";
            break;      
        case 'draw':
            statusText = "Egalité !";
            break;            
    }

    gameStatus.innerHTML = statusText;
    endGameStatus.innerHTML = statusText;
}

function endGame() { 
    document.getElementById('gameEnd').style.display = "block" 
}

function reloadGame() { 
    window.location.reload() 
}
