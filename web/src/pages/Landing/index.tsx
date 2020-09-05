import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import avatar from '../../assets/images/profile-avatar.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import exitIcon from '../../assets/images/icons/exit.svg';

import api from '../../services/api';

import './styles.css';

function Lading() {
  const history = useHistory();
  const [totalConnections, setTotalConnections] = useState(0);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    let token = localStorage.getItem('token');
    setToken(token || '');

    // pensar em uma melhor forma
    if (token) {
    } else {
      history.push('signin');
    }

    api
      .get('/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.decoded) {
          setName(res.data.decoded.payload.fullname);
        } else {
          history.push('signin');
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });

    api.get('connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <>
      {name !== '' ? (
        <div id="page-landing">
          <div className="home">
            <div className="home-user">
              <div className="profile">
                <Link
                  to="/profile"
                  style={{ textDecoration: 'none', color: '#d4c2ff' }}
                >
                  <figure>
                    <img src={avatar} alt="me" className="avatar" />
                    <figcaption>{name}</figcaption>
                  </figure>
                </Link>

                <Link to="/signin">
                  <img src={exitIcon} alt="EXIT" />
                </Link>
              </div>

              <div className="proffy-brand">
                <div className="logo-container">
                  <img src={logoImg} alt="Proffy" />
                  <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                  src={landingImg}
                  alt="Plataforma de estudos"
                  className="hero-image"
                />
              </div>
            </div>
          </div>

          <div className="call-to-action">
            <footer>
              <h4>
                Seja bem-vindo.
                <strong>O que deseja fazer?</strong>
              </h4>

              <div className="action-content">
                <span className="total-connections">
                  Total de {totalConnections} conexões já realizadas{' '}
                  <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>

                <div className="buttons-container">
                  <Link to="/study" className="study">
                    <img src={studyIcon} alt="Estudar" />
                    Estudar
                  </Link>

                  <Link to="/give-classes" className="give-classes">
                    <img src={giveClassesIcon} alt="Dar aulas" />
                    Dar aulas
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      ) : (
        <div className="loading">
          <span>Carregando...</span>
          <div className="loading-border"></div>
        </div>
      )}
    </>
  );
}

export default Lading;
