import * as React from 'react';

import LandingComponentSvg from '../svg/landingSvg';
import styles from './landing.module.css';

const Landing = () => {
  return (
    <article>
      <div>
        <img src="/clubLogo2.png" alt="club-logo" className={styles.clubLogo} />
        <LandingComponentSvg />
      </div>
    </article>
  );
};

export default Landing;
