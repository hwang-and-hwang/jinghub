import React from 'react';
import * as css from './Profile.css';

import profileImage from '../../assets/logo.png';
import CompanyIcon from './CompanyIcon';
import LocationIcon from './LocationIcon';
import LinkIcon from './LinkIcon';

type ProfileProps = {
  
};

const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <div className={css.root}>
      <img src={profileImage} className={css.profileImage} />
      <h3>황정빈</h3>
      <span>jeongbbn</span>
      <hr />
      <ul className={css.list}>
        <li className={css.listItem}>
          <CompanyIcon />
          <span>@naver</span>
        </li>
        <li className={css.listItem}>
          <LocationIcon />
          <span>인천</span>
        </li>
        <li className={css.listItem}>
          <LinkIcon />
          <a href='https://github.com/jeongbbn'>github.com/jeongbbn</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;