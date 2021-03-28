import {Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
const backdrop = {
  visible: {
      opacity: 1
  },
  hidden: {
      opacity: 0
  }
}

const modal = {
  hidden: {
      y: '-100vh',
      opacity: 0
  },
  visible: {
      y: '200px',
      opacity: 1,
      transition: { delay: 0.5}
  }
}

const crossVariants = {
    hover:{
        rotate: 45
    }
}

const Join = ({ showModal, setShowModal }) => {
  return ( 
    <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div className='backdrop'
                    variants={backdrop}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div className='modal'
                        variants={modal}
                    >
                        <motion.div variants={crossVariants} whileHover='hover' className="cross-section"
                            onClick={() => setShowModal(false)}
                        >
                            <div className="cline-1"></div>
                            <div className="cline-2"></div>
                        </motion.div>
                        <p>Click the Links below to join</p>
                        <a href='https://discord.gg/gpkg9zW'>
                            <button>Discord</button>
                        </a>
                        <a href='https://t.me/hackclubnmit'>
                            <button>Telegram</button>
                        </a>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSf9kMwgpCGHMu8NqnQnfoFSOLjIi4V88iBYyocbpFkF2GyMJQ/viewform'>
                            <button>Google Form</button>
                        </a>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
   );
}
 
export default Join;