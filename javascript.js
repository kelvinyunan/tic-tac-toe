const tiles = document.querySelectorAll('.box');
const resetBtn = document.getElementById('reset');

function startGame () {
    let playerO = newPlayer('O');
    let playerX = newPlayer('X');
    
    let playerTurn = true;
    let turns = 0;

    tiles.forEach((tile) => {
        tile.addEventListener('click',()=>{
            if(playerTurn ==  true) {
                playerO.takeTile(tile);
                tile.textContent = playerO.player;
                tile.style.color = 'red';
                checkResult(playerO);
                tile.classList.add('unclickable');
                playerTurn = !playerTurn;
                turns++;
                checkTie(turns);
            } else {
                playerX.takeTile(tile);
                tile.textContent = playerX.player;
                tile.style.color = 'blue';
                checkResult(playerX);
                tile.classList.add('unclickable');
                playerTurn = !playerTurn;
                turns++;
                checkTie(turns);
            }
        })
    })

}

function checkTie (turn) {
    if(turn == 9) {
        alert('Tie!');
        disableTiles();
        return;
    }
}

function disableTiles () {
    tiles.forEach((tile)=>{
        tile.classList.add('unclickable');
    })
}

function newPlayer (player) {
    const gameBoard = {one:'',two:'',three:'',four:'',five:'',six:'',seven:'',eight:'',nine:''};
    const takeTile = (tile) => { gameBoard[tile.id] = true };
    return { player, gameBoard, takeTile };
}

function checkResult (player) {
    const { one, two, three, four, five, six, seven, eight, nine } = player.gameBoard;

    if (one && two && three) {
        alert(`${player.player} Wins!`);
        disableTiles();
    };
    if (four && five && six) {
        alert(`${player.player} Wins!`);
        disableTiles();
    };
    if (seven && eight && nine) {
        alert(`${player.player} Wins!`);
        disableTiles();
    };
    if (one && four && seven) {
        alert(`${player.player} Wins!`);
        disableTiles();
    };
    if (two && five && eight) {
        alert(`${player.player} Wins!`);
        disableTiles();
    };
    if (three && six && nine) {
        alert(`${player.player} Wins!`);
        disableTiles();
    };
    if (three && five && seven) {
        alert(`${player.player} Wins!`);
        disableTiles();
    };
    if (one && five && nine) {
        alert(`${player.player} Wins!`);
        disableTiles();
    };

}

resetBtn.addEventListener('click',()=>{
    window.location.reload();
})

startGame();

