import  React from 'react';

// import LandingComponentSvg from '../svg/landingSvg';
import  './landing.css';
const Landing = () => {
  return (
    <article className="landing">
      <article className="landing__container">
        <div className="landing__sub-1">
          <h2 className="landing__heading">A place for makers</h2>
          <h4 className="landing__sub-heading">
             
            Pariatur consequat mollit dolor consequat <br />
            cu0pidatat aliquip aliqua anim. 
          </h4>
          <button type="button" class="btn btn-primary">Read More</button>
         </div>
         
         <div className="landing__sub-2">
         <img src="https://avatars1.githubusercontent.com/u/57502607?s=200&v=4" alt="Snow" className="landing-logo" />
      
         </div>
         
        
    </article>
     
    </article>
  );
};

export default Landing;
