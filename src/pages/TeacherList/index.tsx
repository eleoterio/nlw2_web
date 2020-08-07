import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeacher(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes',{
      params: {
        subject,
        week_day,
        time
      }
    }).then((e) => {
      console.log(e.data);
      setTeachers(e.data);
    }).catch((e) => {
      alert("Nenhum registro encontrado");
    });
  }

  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis." >
        <form id="search-teacher" onSubmit={searchTeacher}>
          <Select
            id="subject" 
            label="Matéria" 
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Ciencias', label: 'Ciencias'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'Historia', label: 'Historia'},
            ]}
          />
          <Select 
            id="week_day" 
            label="Dia da semana" 
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda'},
              { value: '2', label: 'Terca'},
              { value: '3', label: 'Quarta'},
              { value: '4', label: 'Quinta'},
              { value: '5', label: 'Sexta'},
              { value: '6', label: 'Sabado'},
            ]}
          />
          <Input label="Hora" id="time" type="time" value={time} onChange={(e) => { setTime(e.target.value) }}/>          
          <button type="submit" className="button_buscar">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;