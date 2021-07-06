import  React from 'react';

//import LandingComponentSvg from '../svg/landingSvg';
import './Sponsors.css';
import Sponsercard from './SponserCard';

const Sponsors=() =>{

  return( 
    
     <div className="container">
         <h1 className="sponser-heading">Our Sponsors</h1>
        <div className="row">
            <div className="column">
                <img src="https://avatars1.githubusercontent.com/u/57502607?s=200&v=4" alt="Snow"  />
            </div>
            <div className="column">
                <img src="https://avatars1.githubusercontent.com/u/57502607?s=200&v=4" alt="Mountains"  />
            </div>
            <div className="column">
                <img src="https://avatars1.githubusercontent.com/u/57502607?s=200&v=4" alt="Mountains"  />
            </div>
           
               
        </div>
        <Sponsercard />
    </div>
);
};

export default Sponsors;
