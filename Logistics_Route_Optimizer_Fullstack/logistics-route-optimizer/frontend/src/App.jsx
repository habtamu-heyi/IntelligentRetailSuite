
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [locations, setLocations] = useState("");
  const [route, setRoute] = useState([]);

  const handleSubmit = async () => {
    const locs = locations.split(',').map(l => l.trim());
    const res = await axios.post("http://localhost:5000/optimize", { locations: locs });
    setRoute(res.data.optimized_route);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">🚚 Logistics Route Optimizer</h1>
      <textarea
        value={locations}
        onChange={e => setLocations(e.target.value)}
        placeholder="Enter locations separated by commas"
        className="border p-2 w-full mt-4"
      />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white">Optimize Route</button>
      <div className="mt-4">
        <h2 className="font-semibold">Optimized Route:</h2>
        <ul className="list-disc ml-6">
          {route.map((loc, i) => <li key={i}>{loc}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
