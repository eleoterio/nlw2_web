import React, { InputHTMLAttributes } from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';

interface InputHeaderProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input: React.FC<InputHeaderProps> = ({ id, label, ...rest }) => {
  return(
    <div className="input-block">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...rest} />
    </div>
  );
}

export default Input;