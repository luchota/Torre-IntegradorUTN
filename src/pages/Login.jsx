import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Navbar from '../components/NavBar'
import "../App.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      
      console.log('Inicio de sesión exitoso:', userCredential.user);
    } catch (error) {
    
      console.error('Error al iniciar sesión:', error.message);
      setError(error.message);
    }
  };

  return (
<div>
  <aside>
    <Navbar />
  </aside>
  <div className="login-container">
    <div className="register-form">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <a>Email:</a>
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          <a>Contraseña:</a>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</div>
);
};

export default Login;
