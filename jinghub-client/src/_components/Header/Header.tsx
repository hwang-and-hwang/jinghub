import{ useCallback, FC } from 'react';
import * as css from './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';

type HeaderProps = {
  
};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={css.root}>
      <div className={css.logoContainer}>
        <img src={logo} className={css.logo} />
        <h3>Jinghub</h3>
      </div>
      <NavLink to='/request'>샤워 인증하기</NavLink>
    </div>
  );
};

export default Header;