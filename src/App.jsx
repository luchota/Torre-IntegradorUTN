import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home';  
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/detalles/:id" element={<ProductDetail />} /> 
      </Routes>
    </Router>
  );
};

export default App;
