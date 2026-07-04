// ===============================
// api.js
// Flask communication layer
// ===============================


// 결과 저장 (animation.js가 사용)
let solution = [];
let history = [];


// ===============================
// Solve Request
// ===============================

async function solve(){

    // 검증 (pieces.js)
    if(typeof validatePieces === "function"){
        if(!validatePieces()) return;
    }

    const boardData = getBoard();
    const piecesData = getPieces();

    try{

        const res = await fetch("/solve",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                board:boardData,
                pieces:piecesData
            })
        });

        const data = await res.json();

        if(!data.success){
            alert("No solution found");
            return;
        }

        solution = data.moves;

        // history는 JS에서 만든다
        history = buildHistory(boardData, solution);

        alert("Solve complete!");

    }catch(e){

        console.error(e);
        alert("Server error");

    }

}


// ===============================
// Build History (core logic)
// ===============================

function buildHistory(initialBoard, moves){

    let states = [];

    let board = JSON.parse(JSON.stringify(initialBoard));

    states.push(JSON.parse(JSON.stringify(board)));

    for(let i=0;i<moves.length;i++){

        const move = moves[i];

        applyPiece(board, move);

        clearLines(board);

        states.push(JSON.parse(JSON.stringify(board)));

    }

    return states;

}


// ===============================
// Apply piece
// ===============================

function applyPiece(board, move){

    const piece = getPieces()[move.piece];

    for(let i=0;i<piece.length;i++){

        const r = move.row + piece[i][0];
        const c = move.col + piece[i][1];

        if(r>=0 && r<8 && c>=0 && c<8){

            board[r][c] = 1;

        }

    }

}


// ===============================
// Clear full lines
// ===============================

function clearLines(board){

    // rows
    for(let r=0;r<8;r++){

        let full = true;

        for(let c=0;c<8;c++){

            if(board[r][c]===0){
                full = false;
                break;
            }

        }

        if(full){

            for(let c=0;c<8;c++){
                board[r][c] = 0;
            }

        }

    }

    // cols
    for(let c=0;c<8;c++){

        let full = true;

        for(let r=0;r<8;r++){

            if(board[r][c]===0){
                full = false;
                break;
            }

        }

        if(full){

            for(let r=0;r<8;r++){
                board[r][c] = 0;
            }

        }

    }

}


// ===============================
// Getters for animation.js
// ===============================

function getSolution(){
    return solution;
}

function getHistory(){
    return history;
}


// ===============================
// Hook Solve Button
// ===============================

document.getElementById("solveButton")
.addEventListener("click",solve);
