import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductList from './produxtslist';

function App() {
  return (
    <div className="App">
      <ProductList topN={10} /> {/* Change '10' to whatever top N value you want */}
    </div>
  );
}

export default App;

