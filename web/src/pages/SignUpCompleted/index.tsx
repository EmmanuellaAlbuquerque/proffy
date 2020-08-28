import React from 'react';

import successCheckIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function SignUpCompleted() {
  return (
    <div className="signedup">
      <img src={successCheckIcon} alt="doneIcon" />
      <h1>Cadastro concluído</h1>
      <h4>Agora você faz parte da plataforma da Proffy.</h4>
      <h4>Tenha uma ótima experiência.</h4>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button type="button">Fazer login</button>
      </Link>
    </div>
  );
}

export default SignUpCompleted;
