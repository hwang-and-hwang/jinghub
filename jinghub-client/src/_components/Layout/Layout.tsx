import { ReactNode, FC } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import { motion } from 'framer-motion';
import * as css from './Layout.css';

type LayoutProps = {
  children?: ReactNode,
  direction?: 'column' | 'row';
};

const pageMotion = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {duration: 2}},
  exit: {opacity: 0, transition: {duration: 2}}
};

const Layout: FC<LayoutProps> = ({ children, direction }) => {
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

export default Layout;