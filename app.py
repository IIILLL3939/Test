import streamlit as st

# 페이지 설정
st.set_page_config(
    page_title="첫 번째 Streamlit 앱",
    page_icon="🎉",
)

# 메인 화면
st.title("안녕하세요")

# 버튼
if st.button("나도 인사하기"):
    st.success("🎉 첫 웹앱 제작을 축하합니다!")
    st.balloons()   # 풍선 효과
    st.snow()       # 추가 효과 (선택 사항)
