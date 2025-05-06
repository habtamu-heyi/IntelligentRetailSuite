
import React from 'react';
import ProductList from './components/ProductList';
import SalesForm from './components/SalesForm';
import RestockChart from './components/RestockChart';

function App() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">📦 Retail Inventory Dashboard</h1>
      <ProductList />
      <SalesForm />
      <RestockChart />
    </div>
  );
}

export default App;
