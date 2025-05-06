
# 🧠 AssistAI - Backend

## Overview
A chatbot API powered by OpenAI that answers product or order-related queries.

## Endpoint
- `POST /ask` with JSON `{ "question": "Where is my order?" }`

## Requirements
- Set your OpenAI key:
```bash
export OPENAI_API_KEY=your-api-key
```

## Run
```bash
pip install -r requirements.txt
python app.py
```
