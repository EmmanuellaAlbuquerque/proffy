import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

// sign up
function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const span = document.getElementsByTagName('span')[0];

    email
      ? span.classList.add('scaledPlaceholder')
      : span.classList.remove('scaledPlaceholder');
  }, [email]);

  // clickable button
  useEffect(() => {
    const button = document.getElementsByTagName('button')[0];

    email
      ? button.classList.remove('disabled')
      : button.classList.add('disabled');
  }, [email]);

  function handleUserForgotPassword() {
    history.push('/reseted');
  }

  return (
    <div id="page-reset">
      <div className="reset-container">
        <div className="reset-content">
          <Link to="/" id="comeBack">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <h1>Eita, esqueceu sua senha?</h1>
          <h4>Não esquenta, vamos dar um jeito nisso.</h4>
          <form onSubmit={handleUserForgotPassword}>
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

            <button type="submit" className="disabled">
              Enviar
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

export default ForgotPassword;
