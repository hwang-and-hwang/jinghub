import Layout from '../_components/Layout/Layout';
import Profile from '../_components/Profile/Profile';
import Readme from '../_components/Readme/Readme';
import GrassField from '../_components/GrassField/GrassField';
import { mockShower } from '../_components/GrassField/GrassField.mock';
import Detail from '../_components/Detail/Detail';
import { DetailContext } from '../_components/Detail/Detail.hook';

type MainProps = {
  
};

const Main: React.FC<MainProps> = ({}) => {
  return (
    <Layout direction="column">
      <DetailContext>
        <section style={{ width: '100%'}}>
          <div>
            <Readme />
          </div>
        </section>
        <section>
          <Profile />
        </section>
        <section>
          <GrassField field={mockShower}/>
        </section>
        <section>
          <Detail />
        </section>
      </DetailContext>
    </Layout>

  );
};

export default Main;