import React, { useState, useEffect } from 'react';

import Input from '../../components/Input';

import logo from '../../assets/images/logo.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeSelected, setEyeSelected] = useState(false);

  // for now gambiarra, styled components should resolve this
  useEffect(() => {
    const span = document.getElementsByTagName('span')[0];

    email
      ? span.classList.add('scaledPlaceholder')
      : span.classList.remove('scaledPlaceholder');
  }, [email]);

  useEffect(() => {
    const span = document.getElementsByTagName('span')[1];

    password
      ? span.classList.add('scaledPlaceholder')
      : span.classList.remove('scaledPlaceholder');
  }, [password]);

  useEffect(() => {
    const button = document.getElementsByTagName('button')[0];

    email && password
      ? button.classList.remove('disabled')
      : button.classList.add('disabled');
  }, [email, password]);

  function toggleChangePasswordView() {
    setEyeSelected(!eyeSelected);
  }

  function handleUserLogin() {}

  return (
    <div id="page-login">
      <div className="brand-container">
        <div className="brand-content">
          <img src={logo} alt="Proffy" />
          <h3>Sua plaforma de estudos online.</h3>
        </div>
      </div>

      <div className="login-container">
        <div className="login-content">
          <h1>Fazer login</h1>

          <form onSubmit={handleUserLogin}>
            <div className="relativeInputSpan">
              <label htmlFor="Email">
                <Input
                  name="email"
                  value={email}
                  type="email"
                  className="emailInput"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span>E-mail</span>
              </label>
            </div>

            <div className="relativeInputSpan">
              <label htmlFor="Password">
                <Input
                  name="password"
                  value={password}
                  type={eyeSelected ? 'text' : 'password'}
                  className="passwordInput"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span id="passwordSpan">Senha</span>

                <input
                  type="checkbox"
                  className="eye"
                  name="eye"
                  onClick={toggleChangePasswordView}
                />
              </label>
            </div>

            <div className="options">
              <label htmlFor="rememberMe">
                <input
                  type="checkbox"
                  className="rememberMe"
                  name="rememberMe"
                />
                Lembrar-me
              </label>

              <a href="#">Esqueci minha senha</a>
            </div>

            <button type="submit" className="disabled">
              Entrar
            </button>
          </form>

          <div className="loginFooter">
            <div className="makeYourAccount">
              <h5>Não tem conta?</h5>
              <a href="">
                <strong>Cadastre-se</strong>
              </a>
            </div>

            <div className="itsFree">
              <h6>É de graça</h6>
              <img src={purpleHeart} alt="purpleHeart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
