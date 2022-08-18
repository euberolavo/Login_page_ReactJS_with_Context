import React, { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import './style.css';

const LoginPage = () => {

    const {autenticated, login} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit', { email: email, password: password });
    login(email,password)
  };

  return (
    <div className="login">
      <div className="login__box">
        <p>{String(autenticated)}</p>
        <h1 className="title">Login do Sistema</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="actions">
            <button className="button" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
