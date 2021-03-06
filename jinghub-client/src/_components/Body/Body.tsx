import { FC, ReactNode } from 'react';
import * as css from './Body.css';

type BodyProps = {
  children?: ReactNode;
  direction?: 'column' | 'row';
};

export const Body: FC<BodyProps> = ({ children, direction }) => {
  return <div className={css.root({
    'flex-direction': direction || 'row'
  })}>
    {children}
  </div>;
};