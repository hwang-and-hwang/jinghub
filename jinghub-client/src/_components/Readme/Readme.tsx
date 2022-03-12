import React from 'react';
import * as css from './Readme.css';

type ReadmeProps = {

};

const Readme: React.FC<ReadmeProps> = ({}) => {
  return (
    <div className={css.root}>README</div>
  );
};

export default Readme;