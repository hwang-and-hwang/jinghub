import{ FC } from 'react';
import * as css from './Header.css';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';

type HeaderProps = {
  
};

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={css.root}>
      <NavLink className={css.logoContainer} to='/'>
        <img src={logo} className={css.logo} />
        <h3>Jinghub</h3>
      </NavLink>
      <NavLink to='/request' className={css.navLink}>샤워 인증하기</NavLink>
    </div>
  );
};