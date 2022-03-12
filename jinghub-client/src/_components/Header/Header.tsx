import React from 'react';
import * as css from './Header.css';

import logo from '../../assets/logo.png';

type HeaderProps = {
  
};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={css.root}>
      <div className={css.logoContainer}>
        <img src={logo} className={css.logo} />
        <h3>Jinghub</h3>
      </div>
      <nav>샤워 인증하기</nav>
    </div>
  );
};

export default Header;