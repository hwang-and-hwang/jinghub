import { FC, useCallback, useContext, useState } from 'react';
import * as css from './Grass.css';
import { JingShower } from '../../../types';
import { Context } from '../../Detail/Detail.hook';

type GrassProps = {
  item: JingShower
};

export const Grass: FC<GrassProps> = ({ item }) => {
  const { setDetailData } = useContext(Context);

  const onClickGrass = useCallback(() => {
    setDetailData?.({
      showing: true,
      item: item
    });
  }, [item])

  return (
    <div
      className={css.root({
        cleaned: item.didCleaned ? 'perfect' : 'no'
      })}
      onClick={onClickGrass}
    >
    </div>
  );
};