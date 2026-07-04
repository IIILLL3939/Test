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

</style>

<body>

<div id="board"></div>

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

</body>

</html>
"""

st.title("Block Blast Solver")

components.html(html,height=410)
