import React from 'react';
import * as css from './Header.css';

import logo from '../../assets/logo.png';

type HeaderProps = {
  
};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={css.root}>
      <img src={logo} className={css.logo} />
    </div>
  );
};

export default Header;