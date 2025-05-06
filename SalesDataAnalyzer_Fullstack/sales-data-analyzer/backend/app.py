
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from io import StringIO

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze():
    file = request.files['file']
    df = pd.read_csv(file)
    
    summary = {
        "total_sales": float(df["Sales"].sum()),
        "top_product": df.groupby("Product")["Sales"].sum().idxmax(),
        "worst_product": df.groupby("Product")["Sales"].sum().idxmin(),
        "average_sales": float(df["Sales"].mean())
    }
    return jsonify(summary)

if __name__ == "__main__":
    app.run(debug=True)
