import React, { useContext } from 'react';
import * as css from './Detail.css';
import { Context } from './Detail.hook';

type DetailProps = {
};

export const Detail: React.FC<DetailProps> = ({ }) => {
  const { detailData } = useContext(Context)
  return detailData.showing ? (
    <div className={css.root}>
      <div>{detailData.item?.date}</div>
      <div>
        정빈이는 이 날 씻지 않았습니다.
      </div>
    </div>
  ) : null;
};