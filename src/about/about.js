import ImageTemp from "../assets/sample.jpg";
import {motion} from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible : {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.1,
      duration: 1
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const About = ({setWhiteHover}) => {
  return ( 
    <motion.div className='about' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
      <div className="new-card">
        <h1>I solemnly swear that I'm upto no good</h1>
        <div className="ncard">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consequuntur ratione totam maxime velit fugit veniam sed numquam animi! Vero ratione provident dignissimos. Fugit voluptate, odit earum vero ipsa eius!</p>
          <img src={ImageTemp} alt="sample image"/>
        </div>
      </div>
      <div className="new-card alternate" onMouseOver={() => setWhiteHover(true)} onMouseLeave = { () => setWhiteHover(false)}>
        <h1>I solemnly swear that I'm upto no good</h1>
        <div className="ncard">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consequuntur ratione totam maxime velit fugit veniam sed numquam animi! Vero ratione provident dignissimos. Fugit voluptate, odit earum vero ipsa eius!</p>
          <img src={ImageTemp} alt="sample image"/>
        </div>
      </div>
      <div className="new-card">
        <h1>I solemnly swear that I'm upto no good</h1>
        <div className="ncard">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consequuntur ratione totam maxime velit fugit veniam sed numquam animi! Vero ratione provident dignissimos. Fugit voluptate, odit earum vero ipsa eius!</p>
          <img src={ImageTemp} alt="sample image"/>
        </div>
      </div>
      <div className="new-card alternate" onMouseOver={() => setWhiteHover(true)} onMouseLeave = { () => setWhiteHover(false)}>
        <h1>I solemnly swear that I'm upto no good</h1>
        <div className="ncard">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consequuntur ratione totam maxime velit fugit veniam sed numquam animi! Vero ratione provident dignissimos. Fugit voluptate, odit earum vero ipsa eius!</p>
          <img src={ImageTemp} alt="sample image"/>
        </div>
      </div>
      
      
    </motion.div>
   );
}
 
export default About;