// Register.jsx
import React from 'react';
import Navbar from '../components/NavBar';
import "../App.css"

const Register = () => {
    return (
      <div>
        <aside>
          <Navbar />
        </aside>
        <div className="register-container">
          <div className="register-form">
            <h2>Registro</h2>
            <form>
              <label>
              <a>Nombre:</a>
                <input type="text" name="name" />
              </label>
              <label>
              <a>Apellido:</a>
                <input type="text" name="lastName" />
              </label>
              <label>
              <a>Email:</a>
                <input type="email" name="email" />
              </label>
              <label>
              <a>Contraseña:</a>
                <input type="password" name="password" />
              </label>
              <button type="submit">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;
  
