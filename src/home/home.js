import frontLogo from '../assets/front_logo.svg';
import {motion} from 'framer-motion';

const homeVariant = {
  hidden : {
    opacity: 0,
  },
  visible : {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.8,
      staggerChildren: 0.8
    }
  },
  exit : {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
    }
  }
}

const Home = () => {
    return (  
      <motion.div className="container"
        variants={homeVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <motion.div variants={item} className="falsecard">
          <h1 className='makers'
            variants={item}
          >A place for MAKERs</h1>
          <p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, soluta dolorum? Perferendis in repellendus illum atque dolorem rem, delectus optio cumque amet, minima, esse ad accusantium cum. Totam, accusamus minus!
          </p>
        </motion.div>
        <motion.img variants={item} className='frontLogo' src={frontLogo} alt="Hack Club logo"/>
      </motion.div>
    );
}
 
export default Home;