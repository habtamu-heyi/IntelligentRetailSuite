
# 🛒 Retail Inventory Optimization - Backend

## 📦 Description
This Flask API supports:
- Adding products
- Recording sales
- Forecasting stock requirements using ML

## 🚀 Quick Start

```bash
cd backend
pip install -r requirements.txt

# Initialize DB
python
>>> from app import db
>>> db.create_all()
>>> exit()

# Run app
python app.py
```

## 🧪 Sample Requests

### Add Product
```bash
curl -X POST http://127.0.0.1:5000/products -H "Content-Type: application/json" -d '{"name": "Shampoo", "stock": 30}'
```

### Log Sale
```bash
curl -X POST http://127.0.0.1:5000/sales -H "Content-Type: application/json" -d '{"product_id": 1, "qty": 5, "date": "2025-05-06"}'
```

### Get Restock Prediction
```bash
curl http://127.0.0.1:5000/predict/1
```

---
