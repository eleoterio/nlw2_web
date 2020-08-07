import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: ''},
    { week_day: 0, from: '', to: ''}
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '', 
        to: ''
      }
    ]);
  }

  function setScheduleItemValue(position:number, field:string, value:string) {
    const newScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value};
      }

      return scheduleItem;
    })

    setScheduleItems(newScheduleItems)
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastrado com Sucesso!');
      history.push('/')
    }).catch(() => {
      alert('Erro ao cadastrar!');
    });

    
  }

  return(
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que você quer dar aulas.."
        description="O primeiro passo é preencher este formulario de inscrição"
      />
      <form onSubmit={handleCreateClass}>
        <main>
          <fieldset>
            <legend>Seus dados</legend>
            <Input id="name" label="Nome Completo" value={name} onChange={(e) => { setName(e.target.value) }}/>
            <Input id="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }}/>
            <Input id="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }}/>
            <Textarea id="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }}/>
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input id="cost" label="Custo da sua hora aula" value={cost} onChange={(e) => { setCost(e.target.value) }}/>
          </fieldset>

          <fieldset>
            <legend>Horarios disponiveis
              <button type="button" onClick={addNewScheduleItem}>
                + novo horario
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select 
                    id="week_day" 
                    label="Dia da semana" 
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    value={scheduleItem.week_day}
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
                  <Input id="from" label="das" type="time" value={scheduleItem.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>
                  <Input id="to" label="até" type="time" value={scheduleItem.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </main>
      </form>
    </div>
  );
}

export default TeacherForm;