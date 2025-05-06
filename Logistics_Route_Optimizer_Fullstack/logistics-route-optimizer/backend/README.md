
# 🚚 Logistics Route Optimizer - Backend

## API Endpoint

### Optimize Route
`POST /optimize`

**Request Body:**
```json
{
  "locations": ["Warehouse", "Point A", "Point B", "Point C"]
}
```

**Response:**
```json
{
  "optimized_route": ["Point C", "Point B", "Point A", "Warehouse"]
}
```

## Run Server

```bash
pip install -r requirements.txt
python app.py
```
