
from models import Sale
from app import db
import pandas as pd
from sklearn.linear_model import LinearRegression
import numpy as np

def forecast_restock(product_id):
    sales = Sale.query.filter_by(product_id=product_id).all()
    if len(sales) < 2:
        return "Not enough data"

    df = pd.DataFrame([(s.date.toordinal(), s.quantity_sold) for s in sales], columns=["date", "qty"])
    X = df["date"].values.reshape(-1, 1)
    y = df["qty"].values

    model = LinearRegression()
    model.fit(X, y)

    future_date = np.array([[max(df["date"]) + 7]])
    prediction = model.predict(future_date)

    return int(max(prediction[0], 0))
