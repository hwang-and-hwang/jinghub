import React from 'react';
import * as css from './Grass.css';
import { JingShower } from '../../../types';

type GrassProps = {
  item: JingShower
};

const Grass: React.FC<GrassProps> = ({ item }) => {
  return (
    <div className={css.root({
      cleaned: item.didCleaned ? 'perfect' : 'no'
    })}>

    </div>
  );
};

export default Grass;