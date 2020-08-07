import React, { TextareaHTMLAttributes } from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';

interface TextareaHeaderProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

const Textarea: React.FC<TextareaHeaderProps> = ({ id, label, ...rest }) => {
  return(
    <div className="textarea-block">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...rest} />
    </div>
  );
}

export default Textarea;