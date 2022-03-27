import { MouseEvent, useRef } from 'react';
import { FormInput } from './FormInput';
import * as css from './LoginForm.css';

export const LoginForm = () => {
  const formEl = useRef<HTMLFormElement>(null);
  const idEl = useRef<HTMLInputElement>(null);
  const passwordEl = useRef<HTMLInputElement>(null);

  const onClickSubmit = (e: MouseEvent) => {
    e.preventDefault();
    // TODO: post Login
    if(!formEl.current) return;
    const payload = {
      username: formEl.current.username.value,
      password: formEl.current.password.value,
    };
    console.log(payload);
  }
  return (
    <form className={css.root} ref={formEl}>
      <FormInput 
        label='Username' 
        name='username' 
        placeholder='username을 입력해주세요.' 
      />
      <FormInput 
        label='Password' 
        name='password'
        placeholder='비밀번호를 입력해주세요.' 
        type='password' 
      />
      <button type='submit' onClick={onClickSubmit} className={css.button}>
        로그인
      </button>
    </form>
  )
}