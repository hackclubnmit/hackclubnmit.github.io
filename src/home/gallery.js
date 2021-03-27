import ImageTemp from "../assets/sample.jpg";
import {motion} from 'framer-motion';


const galleryVariants = {
  hidden : {
    opacity: 0,
    x: '-100vw'
  },
  visible : {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2
    }
  }
}

const Gallery = ({setWhiteHover}) => {
  return ( 
    <motion.div className="gallery"
      variants={galleryVariants}
      initial='hidden'
      animate='visible'
      onMouseOver={() => setWhiteHover(true)} onMouseLeave = { () => setWhiteHover(false)}
    >
        <div className="whitecard">
            <h1 className='makers'>Philosophy</h1>
            <p>
              We think learning to code is uniquely like gaining a superpower: it converts you from a consumer to a creator, turning your computer into a tool for creation. If you’re reading this, you can learn to build an app—there’s never been a better time for making.
            </p>
            <p>
              The goal of Hack Club is to help you become a hacker. We want an inclusive space on the internet & at every school where people are making interesting things with code, every week.
            </p>
            <img src={ImageTemp} alt="photo"/>
        </div>
        
    </motion.div>
  );
}
 
export default Gallery;