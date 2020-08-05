import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis." >
        <form id="search-teacher">
          <Input label="Matéria" id="subject" />
          <Input label="Dia da semana" id="week_day" />
          <Input label="Hora" id="time" />          
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;