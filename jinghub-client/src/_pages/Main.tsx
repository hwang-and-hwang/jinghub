import React from 'react';
import Layout from '../_components/Layout/Layout';
import Profile from '../_components/Profile/Profile';
import Readme from '../_components/Readme/Readme';

import * as css from './Main.css';

type MainProps = {
  
};

const Main: React.FC<MainProps> = ({}) => {
  return (
    <Layout>
      <section>
        <Profile />
      </section>
      <section>
        <div className={css.main}>
          <Readme />
        </div>
      </section>
    </Layout>
  );
};

export default Main;