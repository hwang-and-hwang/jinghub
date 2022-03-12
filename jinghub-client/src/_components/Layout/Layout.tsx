import { ReactNode, FC } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import * as css from './Layout.css';

type LayoutProps = {
  children?: ReactNode,
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={css.root({})
    }>
      <Header />
      <Body>{children}</Body>
    </div>
  );
};

export default Layout;