// ===============================
// Board.js
// ===============================

const BOARD_SIZE = 8;

// board[r][c]
// 0 = empty
// 1 = filled

let board = [];

const boardDiv = document.getElementById("board");



// ===============================
// Create Empty Board
// ===============================

function initializeBoardArray(){

    board = [];

    for(let r=0;r<BOARD_SIZE;r++){

        board.push([]);

        for(let c=0;c<BOARD_SIZE;c++){

            board[r].push(0);

        }

    }

}



// ===============================
// Draw Board
// ===============================

function createBoard(){

    boardDiv.innerHTML="";

    initializeBoardArray();

    for(let r=0;r<BOARD_SIZE;r++){

        for(let c=0;c<BOARD_SIZE;c++){

            const cell=document.createElement("div");

            cell.className="cell";

            cell.dataset.row=r;

            cell.dataset.col=c;

            cell.addEventListener("click",()=>{

                toggleBoardCell(r,c,cell);

            });

            boardDiv.appendChild(cell);

        }

    }

}



// ===============================
// Toggle Cell
// ===============================

function toggleBoardCell(r,c,cell){

    board[r][c]^=1;

    cell.classList.toggle("active");

}



// ===============================
// Clear Board
// ===============================

function clearBoard(){

    initializeBoardArray();

    const cells=document.querySelectorAll("#board .cell");

    cells.forEach(cell=>{

        cell.classList.remove("active");

    });

}



// ===============================
// Draw Existing State
// Used by animation.js
// ===============================

function drawBoard(state){

    board=JSON.parse(JSON.stringify(state));

    const cells=document.querySelectorAll("#board .cell");

    for(let r=0;r<BOARD_SIZE;r++){

        for(let c=0;c<BOARD_SIZE;c++){

            const idx=r*BOARD_SIZE+c;

            if(board[r][c]){

                cells[idx].classList.add("active");

            }

            else{

                cells[idx].classList.remove("active");

            }

        }

    }

}



// ===============================
// Copy Board
// ===============================

function copyBoard(){

    return JSON.parse(JSON.stringify(board));

}



// ===============================
// Get Board
// Used by api.js
// ===============================

function getBoard(){

    return copyBoard();

}



// ===============================
// Event
// ===============================

document.getElementById("clearBoard")
.addEventListener("click",clearBoard);



// ===============================
// Start
// ===============================

createBoard();
