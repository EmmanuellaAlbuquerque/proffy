import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import avatarPicture from '../../assets/images/profile-avatar.svg';
import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [token, setToken] = useState('');

  function handleSaveProfile(e: FormEvent) {
    e.preventDefault();

    console.log(
      'Name',
      name,
      'Email',
      email,
      'Avatar',
      avatar,
      'Whatsapp',
      whatsapp,
      'Bio',
      bio,
    );
  }

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
          const { fullname, email } = res.data.decoded.payload;
          setName(fullname);
          setEmail(email);
        } else {
          history.push('signin');
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        topBarText="Meu perfil"
        className="center"
        pageHeight="pageHeight"
      >
        <figure>
          <img
            src={avatar !== '' ? avatar : avatarPicture}
            alt="!!!!!!!!!!!!!!!!!!                                                            !!!!! Profile                                                                  !!!! Image                                   !!!!!!!!!!!!!!!!!!  "
            className="avatar"
          />
          <figcaption>{name}</figcaption>
        </figure>
      </PageHeader>

      <main>
        <form onSubmit={handleSaveProfile}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              type="number"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis</legend>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
