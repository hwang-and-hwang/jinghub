import { ReactNode, FC } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import * as css from './Layout.css';

type LayoutProps = {
  children?: ReactNode,
  direction?: 'column' | 'row';
};

const Layout: FC<LayoutProps> = ({ children, direction }) => {
  return (
    <div
      className={css.root({})
    }>
      <Header />
      <Body direction={direction}>{children}</Body>
    </div>
  );
};

export default Layout;