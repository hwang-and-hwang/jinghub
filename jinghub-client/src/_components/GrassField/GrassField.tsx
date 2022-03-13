import React, { useMemo } from 'react';
import * as css from './GrassField.css';

import { JingShower } from '../../types';
import Grass from './Grass/Grass';

type GrassFieldProps = {
  field: JingShower[];
};

const GrassField: React.FC<GrassFieldProps> = ({ field } : GrassFieldProps) => {
  const totalShower = useMemo(() => {
    return field.reduce((prev, cur) => {
      return cur.didCleaned ? prev + 1 : prev;
    }, 0)
  }, []);

  const days = useMemo(() => {
    return ['Sum', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
      day => <div style={{ justifySelf: 'center'}}>{day}</div>
    );
  }, []);

  return (
    <div className={css.root}>
      <h3>정빈이는 최근 30일간 {totalShower}회 씻었습니다.</h3>
      <div className={css.grid}>
        {days}
        {field.map(item => <Grass item={item}/>)}
      </div>
    </div>
  );
};

export default GrassField;