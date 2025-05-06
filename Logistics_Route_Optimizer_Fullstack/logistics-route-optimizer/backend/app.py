
from flask import Flask, request, jsonify
from flask_cors import CORS
from ml.route_optimizer import optimize_route

app = Flask(__name__)
CORS(app)

@app.route("/optimize", methods=["POST"])
def optimize():
    data = request.get_json()
    locations = data.get("locations", [])
    optimized = optimize_route(locations)
    return jsonify({"optimized_route": optimized})

if __name__ == "__main__":
    app.run(debug=True)
