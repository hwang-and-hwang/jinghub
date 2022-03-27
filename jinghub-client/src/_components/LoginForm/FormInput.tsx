import { ChangeEvent, FC, useRef, forwardRef, RefObject, ReactElement, useState } from 'react'
import * as css from './FormInput.css';

type FormInputType = {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'password' | 'text';
}

export const FormInput: FC<FormInputType> = ({ label, name, placeholder, type = 'text' }) => {
  const [input, setInput] = useState<string>('');
  const onChange = ({ target }: ChangeEvent) => {
    setInput((target as HTMLInputElement).value);
  }

  return (
    <div className={css.root}>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder}
        className={css.input}
        onChange={onChange}
        value={input}
      />
    </div>
  )
};