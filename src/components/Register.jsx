// Register.jsx
import React from 'react';
import Navbar from '../components/NavBar';
import "../App.css"

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="register-container">
        <div className="register-form">
          <h2>Registro</h2>
          <form>
            <label>
              Nombre:
              <input type="text" name="name" />
            </label>
            <label>
              Apellido:
              <input type="text" name="lastName" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Contraseña:
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
