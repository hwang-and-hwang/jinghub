import React from 'react';
import * as css from './Readme.css';

type ReadmeProps = {

};

export const Readme: React.FC<ReadmeProps> = ({}) => {
  return (
    <div className={css.root}>
      정빈이가 오늘은 씻었을까요?
    </div>
  );
};