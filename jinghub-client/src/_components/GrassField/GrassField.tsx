import React, { useMemo } from 'react';
import * as css from './GrassField.css';

import { JingShower } from '../../types';
import { useJingShowerQuery } from './GrassField.hook';
import { QueryErrorResetBoundary } from 'react-query';
import { Grass } from './Grass';

type GrassFieldProps = {
  field: JingShower[];
};

export const GrassField: React.FC<GrassFieldProps> = ({ field } : GrassFieldProps) => {
  const data = useJingShowerQuery('2022-04');
  const totalShower = useMemo(() => {
    return field.reduce((prev, cur) => {
      return cur.didCleaned ? prev + 1 : prev;
    }, 0)
  }, [data]);

  const days = useMemo(() => {
    return ['Sum', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
      day => <div style={{ justifySelf: 'center'}} key={day}>{day}</div>
    );
  }, []);

  return (
      <div className={css.root}>
        <h3>정빈이는 최근 30일간 {totalShower}회 씻었습니다.</h3>
        <QueryErrorResetBoundary>
          <div className={css.grid}>
            {days}
            {field.map(item => <Grass item={item} key={item.date}/>)}
          </div>
        </QueryErrorResetBoundary>
      </div>
  );
};