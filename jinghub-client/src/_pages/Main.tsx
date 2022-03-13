import React from 'react';
import Layout from '../_components/Layout/Layout';
import Profile from '../_components/Profile/Profile';
import Readme from '../_components/Readme/Readme';

import * as css from './Main.css';
import GrassField from '../_components/GrassField/GrassField';

type MainProps = {
  
};

const Main: React.FC<MainProps> = ({}) => {
  return (
    <Layout direction="column">
      <section style={{ width: '100%'}}>
        <div>
          <Readme />
        </div>
      </section>
      <section>
        <Profile />
      </section>
      <section>
        <GrassField />
      </section>
    </Layout>
  );
};

export default Main;