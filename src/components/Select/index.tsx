import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectHeaderProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: Array<{ value:string, label: string}>
}

const Select: React.FC<SelectHeaderProps> = ({ id, label, options, ...rest }) => {
  return(
    <div className="select-block">
      <label htmlFor={id}>{label}</label>
      <select value="" id={id} {...rest} >
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  );
}

export default Select;