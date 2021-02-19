
import {motion} from 'framer-motion';
import ImageTemp from "../assets/sample.jpg";


const events = ['Getting Started with Blockchain','TypeScript : Get Started','React Three Fiber (Threejs)','Three.js+Blender','Discord Chatbot','A dive into Blender\'s Basic','How to setup the Best Portfolio!','Linux Administraion','Blockchain and Hackathon 101']
const specialEvents = ['Hacktoberfest 2020','AMA #2 with BLOCKVIGIL','AMA #1 with Pranjal Paliwal','Hackbout 1.0']
const links = ['https://youtu.be/uOpZUf1TbWg','https://youtu.be/86gxz4PmjmA','https://youtu.be/dVw6fJDxE2E','https://youtu.be/inujuygrmnU','https://youtu.be/FwIi2Z-7fmI','https://youtu.be/VcE9bopOzvM','https://youtu.be/G1PshjZcsow','https://youtu.be/jrBLH9rIGtM','https://youtu.be/vmLzm9bUXIM']
const slinks = ['https://youtu.be/jPaI9XBcjSY','https://youtu.be/jQVq_SFWh0A','https://youtu.be/ELIZpjwmyYc','https://youtu.be/qRvF7VfADH4']

const containerVariants = {
    hidden: {
      opacity: 0,
      x: '-100vw'
    },
    visible : {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.1,
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 1,
        delayChildren: 0.8,
      }
    },
    exit: {
      x: '100vw',
      transition: { ease: 'easeInOut' }
    }
}
const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
          duration: 2,
          type: 'tween'
      }
    },
    // hover: {
    //     scale: 1.2,
    //     textAlign: 'center',
    // }
  }

const Events = ({setMouseOver}) => {

    return ( 
        <motion.div className='events' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
            <ul>
                {specialEvents.map((item)=> 
                <li key={specialEvents.indexOf(item).toString()} className='e-list'>
                    <motion.a href={slinks[specialEvents.indexOf(item).toString()]} className='e-items'
                        variants={childVariants} initial='hidden' animate='visible' whileHover='hover'
                        onMouseOver={() => setMouseOver(true)} onMouseLeave = { () => setMouseOver(false)}
                    >
                      {item}
                    </motion.a>
                </li>)}
                <div className="break"></div>
                {events.map((item)=> 
                <li key={events.indexOf(item).toString()} className='e-list'>
                    <motion.a href={links[events.indexOf(item).toString()]} className='e-items'
                        variants={childVariants} initial='hidden' animate='visible' whileHover='hover'
                        onMouseOver={() => setMouseOver(true)} onMouseLeave = { () => setMouseOver(false)}
                    >{item}</motion.a>
                </li>)}
            </ul>
        </motion.div>
     );
}
 
export default Events;