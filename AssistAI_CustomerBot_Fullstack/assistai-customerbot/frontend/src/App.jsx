
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const res = await axios.post("http://localhost:5000/ask", { question });
    setAnswer(res.data.answer);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">💬 AssistAI Chatbot</h1>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border p-2 w-full my-4"
        placeholder="Ask a question like 'Where is my order?'"
      />
      <button onClick={handleAsk} className="px-4 py-2 bg-purple-600 text-white">Ask</button>
      {answer && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
