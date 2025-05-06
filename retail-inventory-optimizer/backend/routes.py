
from flask import Blueprint, request, jsonify
from app import db
from models import Product, Sale
from ml.predictor import forecast_restock

inventory_routes = Blueprint('inventory_routes', __name__)

@inventory_routes.route("/products", methods=["POST"])
def add_product():
    data = request.json
    product = Product(name=data["name"], current_stock=data["stock"])
    db.session.add(product)
    db.session.commit()
    return jsonify({"message": "Product added"}), 201

@inventory_routes.route("/sales", methods=["POST"])
def log_sale():
    data = request.json
    sale = Sale(product_id=data["product_id"], quantity_sold=data["qty"], date=data["date"])
    db.session.add(sale)
    db.session.commit()
    return jsonify({"message": "Sale recorded"}), 201

@inventory_routes.route("/predict/<int:product_id>")
def predict_stock(product_id):
    forecast = forecast_restock(product_id)
    return jsonify({"product_id": product_id, "recommended_restock": forecast})
