
# 🛒 Retail Inventory Optimizer (Fullstack App)

## 📦 Project Structure
- `backend/`: Flask API with ML-based restock prediction
- `frontend/`: React dashboard with TailwindCSS and Chart.js

## 🚀 Getting Started

### Backend
```bash
cd backend
pip install -r requirements.txt
python
>>> from app import db
>>> db.create_all()
>>> exit()
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 🌐 Backend API URL
Ensure your frontend `api.js` or `.env` uses:
```
REACT_APP_API_URL=http://localhost:5000
```

## 📈 Features
- Inventory CRUD
- Sales tracking
- ML-powered restock forecast
- Data visualizations
