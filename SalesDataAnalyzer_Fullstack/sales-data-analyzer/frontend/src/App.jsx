
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:5000/analyze", formData);
    setResult(res.data);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">📈 Sales Analyzer</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} className="my-2" />
      <button onClick={uploadFile} className="px-4 py-2 bg-green-600 text-white">Analyze</button>

      {result && (
        <div className="mt-4">
          <h2 className="font-semibold">Insights</h2>
          <p>Total Sales: ${result.total_sales.toFixed(2)}</p>
          <p>Top Product: {result.top_product}</p>
          <p>Worst Product: {result.worst_product}</p>
          <p>Average Sale: ${result.average_sales.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
