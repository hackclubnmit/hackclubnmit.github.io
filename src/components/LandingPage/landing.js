import  React from 'react';

//import LandingComponentSvg from '../svg/landingSvg';
import  './landing.css';
import clublogo from '../../assets/logo/pikachu.jpg'
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
         <div className="landing__sub-2">
         <img src={clublogo} alt="club-logo" className="landing-logo" />
       {/* <LandingComponentSvg />*/}
         </div>
         </div>
          
    </article>
     
    </article>
  );
};

export default Landing;
