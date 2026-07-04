// ===============================
// Pieces.js
// ===============================

const PIECE_SIZE = 5;

const pieceDivs = [
    document.getElementById("piece1"),
    document.getElementById("piece2"),
    document.getElementById("piece3")
];

let pieces = [];


// ===============================
// Initialize Array
// ===============================

function initializePieces(){

    pieces=[];

    for(let p=0;p<3;p++){

        pieces.push([]);

        for(let r=0;r<PIECE_SIZE;r++){

            pieces[p].push([]);

            for(let c=0;c<PIECE_SIZE;c++){

                pieces[p][r].push(0);

            }

        }

    }

}


// ===============================
// Create Piece Boards
// ===============================

function createPieces(){

    initializePieces();

    for(let p=0;p<3;p++){

        pieceDivs[p].innerHTML="";

        for(let r=0;r<PIECE_SIZE;r++){

            for(let c=0;c<PIECE_SIZE;c++){

                const cell=document.createElement("div");

                cell.className="piececell";

                cell.dataset.piece=p;
                cell.dataset.row=r;
                cell.dataset.col=c;

                cell.addEventListener("click",()=>{

                    togglePieceCell(p,r,c,cell);

                });

                pieceDivs[p].appendChild(cell);

            }

        }

    }

}


// ===============================
// Toggle
// ===============================

function togglePieceCell(p,r,c,cell){

    pieces[p][r][c]^=1;

    cell.classList.toggle("active");

}


// ===============================
// Clear
// ===============================

function clearPieces(){

    initializePieces();

    document
    .querySelectorAll(".piececell")
    .forEach(cell=>{

        cell.classList.remove("active");

    });

}


// ===============================
// Normalize
// Return:
// [[0,0],[0,1],[1,0]]
// ===============================

function normalizePiece(piece){

    let coords=[];

    for(let r=0;r<PIECE_SIZE;r++){

        for(let c=0;c<PIECE_SIZE;c++){

            if(piece[r][c]){

                coords.push([r,c]);

            }

        }

    }

    // 빈 피스
    if(coords.length===0){

        return [];

    }

    let minR=100;
    let minC=100;

    coords.forEach(pos=>{

        minR=Math.min(minR,pos[0]);
        minC=Math.min(minC,pos[1]);

    });

    coords=coords.map(pos=>{

        return [
            pos[0]-minR,
            pos[1]-minC
        ];

    });

    return coords;

}


// ===============================
// Get Pieces
// ===============================

function getPieces(){

    return pieces.map(normalizePiece);

}


// ===============================
// Check Connected
// ===============================

function isConnected(piece){

    if(piece.length===0){

        return false;

    }

    const set=new Set();

    piece.forEach(([r,c])=>{

        set.add(r+","+c);

    });

    const visited=new Set();

    const stack=[piece[0]];

    while(stack.length){

        const [r,c]=stack.pop();

        const key=r+","+c;

        if(visited.has(key)){

            continue;

        }

        visited.add(key);

        const dir=[
            [1,0],
            [-1,0],
            [0,1],
            [0,-1]
        ];

        dir.forEach(([dr,dc])=>{

            const nr=r+dr;
            const nc=c+dc;

            const nk=nr+","+nc;

            if(set.has(nk) && !visited.has(nk)){

                stack.push([nr,nc]);

            }

        });

    }

    return visited.size===piece.length;

}


// ===============================
// Validate
// ===============================

function validatePieces(){

    const ps=getPieces();

    for(let i=0;i<3;i++){

        if(ps[i].length===0){

            alert(`Piece ${i+1} is empty.`);

            return false;

        }

        if(!isConnected(ps[i])){

            alert(`Piece ${i+1} is not connected.`);

            return false;

        }

    }

    return true;

}


// ===============================
// Event
// ===============================

document
.getElementById("clearPieces")
.addEventListener("click",clearPieces);


// ===============================
// Start
// ===============================

createPieces();
