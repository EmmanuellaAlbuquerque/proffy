import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import logo from '../../assets/images/logo.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import redWarning from '../../assets/images/icons/red-warning.svg';

import api from '../../services/api';

import './styles.css';

interface warningErrorProps {
  email?: boolean;
  password?: boolean;
  valid_token?: boolean;
}

// sign in
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeSelected, setEyeSelected] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningError, setwarningError] = useState<warningErrorProps>(
    { email: true, password: true, valid_token: false },
  );

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

  function warningErrorContent(warning: warningErrorProps) {
    if (warning.email === false) {
      return 'O email inserido não corresponde a nenhuma conta. Tente novamente.';
    } else if (warning.password === false) {
      return 'A senha inserida está incorreta. Tente novamente.';
    } else {
      return '';
    }
  }

  async function handleUserLogin(e: FormEvent) {
    e.preventDefault();

    const response = await api.post('login', {
      email,
      password,
    });

    setwarningError({
      email: response.data.email,
      password: response.data.password,
      valid_token: response.data.valid_token,
    });

    if (response.data.valid_token) {
      history.push('/home');
    }

    if (
      response.data.email == false ||
      response.data.password == false
    ) {
      setWarning(true);
    }
  }

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
            {warning && (
              <div className="warning">
                <img src={redWarning} alt="redWarningIcon" />
                <h4>{warningErrorContent(warningError)}</h4>
              </div>
            )}

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

              <Link to="/forgotPassword">Esqueci minha senha</Link>
            </div>

            <button type="submit" className="disabled">
              Entrar
            </button>
          </form>

          <div className="loginFooter">
            <div className="makeYourAccount">
              <h5>Não tem conta?</h5>
              <Link to="/signup">
                <strong>Cadastre-se</strong>
              </Link>
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
