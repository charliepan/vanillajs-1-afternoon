let board = [];
let winner = false;

const play = index =>{
    let selectedBox = document.getElementById(index);
    let playerSpan = document.getElementById('player');
    if(winner === false){
        if(playerSpan.innerText === 'X' && selectedBox.innerText === ''){
            playerSpan.innerText = 'O';
            selectedBox.innerText = 'X';
            board[index] = 'X';
            if(board[0] !== undefined && board[0] === board[1] && board[0] === board[2] || 
            board[3] !== undefined && board[3] === board[4] && board[3] === board[5] ||
            board[6] !== undefined && board[6] === board[7] && board[6] === board[8]){
            
                    window.alert("Player X Wins");
                    winner = true;

            }
            else if(board[0] !== undefined && board[0] === board[3] && board[0] === board[6] || 
                    board[1] !== undefined && board[1] === board[4] && board[1] === board[7] ||
                    board[2] !== undefined && board[2] === board[5] && board[2] === board[8]){
                    
                    window.alert("Player X Wins");
                    winner = true;
                    
            }
            else if(board[0] !== undefined && board[0] === board[4] && board[0] === board[8] || 
                    board[2] !== undefined && board[2] === board[4] && board[2] === board[6]){
                
                    window.alert("Player X Wins");
                    winner = true;
                
            }
        }
        else if(playerSpan.innerText === 'O' && selectedBox.innerText === ''){
            playerSpan.innerText = 'X';
            selectedBox.innerText = 'O';
            board[index] = 'O';
            if(board[0] !== undefined && board[0] === board[1] && board[0] === board[2] || 
                board[3] !== undefined && board[3] === board[4] && board[3] === board[5] ||
                board[6] !== undefined && board[6] === board[7] && board[6] === board[8]){
                
                    window.alert("Player O Wins");
                    winner = true;
                    
    
            }
            else if(board[0] !== undefined && board[0] === board[3] && board[0] === board[6] || 
                    board[1] !== undefined && board[1] === board[4] && board[1] === board[7] ||
                    board[2] !== undefined && board[2] === board[5] && board[2] === board[8]){
                    
                    window.alert("Player O Wins");
                    winner = true;
                    
            }
            else if(board[0] !== undefined && board[0] === board[4] && board[0] === board[8] || 
                    board[2] !== undefined && board[2] === board[4] && board[2] === board[6]){
                
                    window.alert("Player O Wins");
                    winner = true;
                
            }

        }

    }
    let boardFull = true;
    for(let i = 0; i < 9; i++){
        if(board[i] === undefined){
            boardFull = false;
        }
    }
    if(boardFull === true){
        window.alert("Cat's Game");
    }
};

const reset = () =>{
    location.reload();

};