// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/register">Registrate</Link></li>
        <li className="nav-item"><Link to="/detalles/:id">Detalles</Link></li>
        <li className="nav-item"><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
