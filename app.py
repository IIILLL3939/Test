import streamlit as st

st.set_page_config(layout="wide")

ROWS = 8
COLS = 8

if "board" not in st.session_state:
    st.session_state.board = [[0]*COLS for _ in range(ROWS)]

st.title("Block Blast Solver")

st.subheader("Board")

for r in range(ROWS):
    cols = st.columns(COLS)

    for c in range(COLS):

        color = "⬜"

        if st.session_state.board[r][c]:
            color = "⬛"

        if cols[c].button(color,key=f"{r}_{c}"):

            st.session_state.board[r][c] ^= 1
            st.rerun()

st.divider()

st.subheader("Pieces")

piece_names = [
    "1",
    "2h",
    "2v",
]

p1 = st.selectbox("Piece 1",piece_names)
p2 = st.selectbox("Piece 2",piece_names)
p3 = st.selectbox("Piece 3",piece_names)

col1,col2 = st.columns(2)

with col1:
    st.button("Solve")

with col2:
    st.button("Show Answer",type="primary")
