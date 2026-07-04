import streamlit as st

st.set_page_config(
    page_title="첫 번째 Streamlit 앱",
    page_icon="🎉",
)

# 배경색
st.markdown("""
<style>
.stApp {
    background-color: #4da6ff;
}

h1 {
    text-align: center;
}
</style>
""", unsafe_allow_html=True)

# 제목
st.title("안녕하세요")

# 버튼 가운데
left, center, right = st.columns([1, 1, 1])

with center:
    if st.button("나도 인사하기", use_container_width=True):
        st.success("🎉 첫 웹앱 제작을 축하합니다!")
        st.balloons()
