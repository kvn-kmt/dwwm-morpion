const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X'; 
const playerTwo = 'O';
let playerTurn = playerOne;

cells.forEach(cell => {
        cell.addEventListener('click', playGame, { once: true });
});

function playGame(e) {
    e.target.innerHTML = playerTurn;

    updateGameStatus(playerTurn); 
    playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
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
    document.getElementById('gameEnd') 
}

function reloadGame() { 
    window.location.reload() 
}
