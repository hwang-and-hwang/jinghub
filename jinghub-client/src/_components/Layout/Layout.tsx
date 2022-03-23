import { ReactNode, FC } from 'react';
import { Header } from '../Header';
import { Body } from '../Body';
import * as css from './Layout.css';

type LayoutProps = {
  children?: ReactNode,
  direction?: 'column' | 'row';
};

export const Layout: FC<LayoutProps> = ({ children, direction }) => {
  return (
    <div className={css.root({})}>
      <Header />
      <Body direction={direction}>{children}</Body>
    </div>
  );
};