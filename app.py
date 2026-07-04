from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    """
    메인 페이지
    """
    return render_template("index.html")


@app.route("/solve", methods=["POST"])
def solve():
    """
    JavaScript에서 보드와 피스를 받아
    solver.py로 넘기는 부분
    """

    data = request.get_json()

    board = data.get("board", [])
    pieces = data.get("pieces", [])

    # -----------------------------
    # TODO
    # 여기서 solver.py 호출
    #
    # 예시
    #
    # from solver import solve
    # answer = solve(board, pieces)
    #
    # -----------------------------

    answer = {
        "success": True,
        "moves": []
    }

    return jsonify(answer)


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )
