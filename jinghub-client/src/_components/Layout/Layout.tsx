import { ReactNode, FC } from 'react';
import { Header } from '../Header';
import { Body } from '../Body';
import { motion } from 'framer-motion';
import * as css from './Layout.css';

type LayoutProps = {
  children?: ReactNode,
  direction?: 'column' | 'row';
};

const pageMotion = {
  initial: {x: -window.innerWidth, transition: { duration: 1}},
  animate: {x: 0, transition: {duration: 1}},
  exit: {x: 200, transition: {duration: 1}}
};

export const Layout: FC<LayoutProps> = ({ children, direction }) => {
  return (
    <motion.div
      className={css.root({})}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
    >
      <Header />
      <Body direction={direction}>{children}</Body>
    </motion.div>
  );
};