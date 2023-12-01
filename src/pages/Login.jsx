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
    <div className='register-container'>
    <Navbar /> 
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
  );
};

export default Login;
