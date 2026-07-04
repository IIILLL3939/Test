import streamlit as st

# 페이지 설정
st.set_page_config(
    page_title="첫 번째 Streamlit 앱",
    page_icon="🎉",
)

# CSS
st.markdown("""
<style>
/* 배경색 */
.stApp {
    background-color: #4da6ff;
}

/* 버튼 가운데 정렬 */
div.stButton {
    display: flex;
    justify-content: center;
}

/* 버튼 크기(선택) */
div.stButton > button {
    font-size: 18px;
    padding: 0.6em 2em;
}
</style>
""", unsafe_allow_html=True)

# 제목
st.title("안녕하세요")

# 버튼
if st.button("나도 인사하기"):
    st.success("🎉 첫 웹앱 제작을 축하합니다!")
    st.balloons()
