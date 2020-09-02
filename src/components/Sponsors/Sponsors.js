import * as React from 'react';

import LandingComponentSvg from '../svg/landingSvg';
import styles from './Sponsors.module.css';


const Sponsors() =>{

  return( 
    
     <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.column}>
                <img src="https://avatars1.githubusercontent.com/u/57502607?s=200&v=4" alt="Snow" style="width:100%" />
            </div>
            <div className={styles.column}>
                <img src="https://avatars1.githubusercontent.com/u/57502607?s=200&v=4" alt="Mountains" style="width:100%" />
            </div>
            <div className={styles.column}>
                <img src="https://avatars1.githubusercontent.com/u/57502607?s=200&v=4" alt="Mountains" style="width:100%" />
            </div>
            <div className={styles.column1}>
                <img src="https://avatars1.githubusercontent.com/u/57502607?s=200&v=4" alt="Mountains" style="width:100%" />
            </div>
            <div className={styles.column1}>
                <img src="https://avatars1.githubusercontent.com/u/57502607?s=200&v=4" alt="Mountains" style="width:100%" />
            </div>

        </div>
    </div>
);
};

export default Sponsors;
