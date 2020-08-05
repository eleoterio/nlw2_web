import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';

interface InputHeaderProps {
  id: string;
  label: string;
}

const Input: React.FC<InputHeaderProps> = (props) => {
  return(
    <div className="input-block">
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id}/>
    </div>
  );
}

export default Input;