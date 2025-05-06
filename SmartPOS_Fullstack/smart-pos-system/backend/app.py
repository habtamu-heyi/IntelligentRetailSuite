
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

cart = []

@app.route("/add-item", methods=["POST"])
def add_item():
    item = request.get_json()
    cart.append(item)
    return jsonify({"message": "Item added", "cart": cart})

@app.route("/get-cart")
def get_cart():
    return jsonify(cart)

if __name__ == "__main__":
    app.run(debug=True)
