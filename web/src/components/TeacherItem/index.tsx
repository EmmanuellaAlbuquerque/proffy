import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/57198678?s=460&u=18118f08f358d2615421a0694cc00b1c10b8bba0&v=4" alt="Emmanuella Albuquerque"/>
      <div>
        <strong>Emmanuella Albuquerque</strong>
        <span>Probabilidade</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      <br /><br />
      Minus ducimus, eveniet corrupti nisi aliquid enim excepturi, vel cumque fugiat exercitationem, praesentium perferendis amet sunt esse vero voluptatem consequatur suscipit maxime.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 100,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contado
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;
