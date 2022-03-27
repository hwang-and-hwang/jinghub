import { ChangeEvent, FC, useRef, forwardRef, RefObject, ReactElement, useState } from 'react'
import * as css from './FormInput.css';

type FormInputType = {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'password' | 'text';
  validate?: (value: string) => boolean;
}

export const FormInput: FC<FormInputType> = ({ label, name, placeholder, type = 'text', validate }) => {
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
      <span>{validate?.(input) && '잘못된 입력입니다.'}</span>
    </div>
  )
};