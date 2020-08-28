import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

// sign up
function SignUp() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeSelected, setEyeSelected] = useState(false);

  // for now gambiarra, styled components should resolve this
  // span scale effect
  useEffect(() => {
    const span = document.getElementsByTagName('span')[0];

    name
      ? span.classList.add('scaledPlaceholder')
      : span.classList.remove('scaledPlaceholder');
  }, [name]);

  useEffect(() => {
    const span = document.getElementsByTagName('span')[1];

    lastName
      ? span.classList.add('scaledPlaceholder')
      : span.classList.remove('scaledPlaceholder');
  }, [lastName]);

  useEffect(() => {
    const span = document.getElementsByTagName('span')[2];

    email
      ? span.classList.add('scaledPlaceholder')
      : span.classList.remove('scaledPlaceholder');
  }, [email]);

  useEffect(() => {
    const span = document.getElementsByTagName('span')[3];

    password
      ? span.classList.add('scaledPlaceholder')
      : span.classList.remove('scaledPlaceholder');
  }, [password]);

  // clickable button
  useEffect(() => {
    const button = document.getElementsByTagName('button')[0];

    name && lastName && email && password
      ? button.classList.remove('disabled')
      : button.classList.add('disabled');
  }, [name, lastName, email, password]);

  function toggleChangePasswordView() {
    setEyeSelected(!eyeSelected);
  }

  function handleUserSignUp() {
    history.push('/signedup');
  }

  return (
    <div id="page-signup">
      <div className="signup-container">
        <div className="signup-content">
          <Link to="/" id="comeBack">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <h1>Cadastro</h1>
          <h4>Preencha os dados abaixo para começar.</h4>
          <form onSubmit={handleUserSignUp}>
            <div className="relativeInputSpan">
              <label htmlFor="name">
                <Input
                  name="name"
                  value={name}
                  type="text"
                  className="nameInput"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <span>Nome</span>
              </label>
            </div>

            <div className="relativeInputSpan">
              <label htmlFor="lastname">
                <Input
                  name="lastname"
                  value={lastName}
                  type="text"
                  className="lastNameInput"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <span>Sobrenome</span>
              </label>
            </div>

            <div className="relativeInputSpan">
              <label htmlFor="email">
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
              <label htmlFor="password">
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

            <button type="submit" className="disabled">
              Concluir cadastro
            </button>
          </form>
        </div>
      </div>

      <div className="brand-container">
        <div className="brand-content">
          <img src={logo} alt="Proffy" />
          <h3>Sua plaforma de estudos online.</h3>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
