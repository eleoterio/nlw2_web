import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/2690798?s=460&u=7682424396759243b65ca2a9f797191c84fac00d&v=4" alt="Felipe Eleoterio" />
        <div>
          <strong>Felipe Eleoterio</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Desenvolvedor Full Stack com foco em Web Back-end, API e WebServices com experiencia em front-end.
        <br />
        <br />
        Familiarizado com sistemas legados, em PHP estrutural, JSP e JAVA =>8.
      </p>
      <footer>
        <p>
          Preço/hora 
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;