import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Block Blast Solver", layout="wide")

html = """
<!DOCTYPE html>
<html>

<style>

body{
    margin:0;
    display:flex;
    justify-content:center;
    background:white;
}

#board{
    display:grid;
    grid-template-columns:repeat(8,45px);
    grid-template-rows:repeat(8,45px);
    gap:2px;
    margin-top:20px;
}

.cell{
    width:45px;
    height:45px;
    background:white;
    border:1px solid #999;
    box-sizing:border-box;
    cursor:pointer;
}

.cell.active{
    background:#555;
}
.piece{
    display:grid;
    grid-template-columns:repeat(5,45px);
    grid-template-rows:repeat(5,45px);
    gap:2px;
    margin-bottom:30px;
}

.piececell{
    width:45px;
    height:45px;
    border:1px solid #999;
    background:white;
    cursor:pointer;
    box-sizing:border-box;
}

.piececell.active{
    background:#555;
}
</style>

<body>

<div id="board"></div>

<hr>

<h3>Piece 1</h3>
<div class="piece" id="piece1"></div>

<h3>Piece 2</h3>
<div class="piece" id="piece2"></div>

<h3>Piece 3</h3>
<div class="piece" id="piece3"></div>

<br>

<div style="text-align:center;">
    <button onclick="clearPieces()">Clear Pieces</button>
</div>

<script>

const board=document.getElementById("board");

for(let i=0;i<64;i++){

    const cell=document.createElement("div");

    cell.className="cell";

    cell.onclick=()=>{

        cell.classList.toggle("active");

    }

    board.appendChild(cell);

}

</script>
function createPiece(id){

    const piece=document.getElementById(id);

    for(let i=0;i<25;i++){

        const cell=document.createElement("div");

        cell.className="piececell";

        cell.onclick=()=>{

            cell.classList.toggle("active");

        };

        piece.appendChild(cell);

    }

}

createPiece("piece1");
createPiece("piece2");
createPiece("piece3");

function clearPieces(){

    document.querySelectorAll(".piececell.active").forEach(cell=>{

        cell.classList.remove("active");

    });

}
</body>

</html>
"""

st.title("Block Blast Solver")

components.html(html,height=410)
