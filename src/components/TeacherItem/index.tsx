import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
      <img src="https://avatars0.githubusercontent.com/u/55111385?s=400&u=1b09bd0b12b7e38b56df162fae9bc415018fe4c9&v=4" alt="Ramon"/>
        <div>
            <strong>Ramon</strong>
            <span>Informática</span>
        </div>
        </header>
        <p>
            Apaixonado por tecnologias avançadas.
            <br/> <br/>
            Procurando sempre compartilhar conhecimento aos meus alunos e mais de 2000 pessoas passaram por mim.
        </p>
        <footer>
            <p>Preço/Hora
            <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;