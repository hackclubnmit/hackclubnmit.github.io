import {useState} from 'react';
import './App.css';
import { Route,Switch, useLocation } from "react-router-dom";
import Navbar from './navbar/navbar';
import Home from './home/home';
import Gallery from './home/gallery';
import Bottom from './bottom/bottom';
import Events from './events/events';
import About from './about/about';
import { AnimatePresence } from 'framer-motion';
import Join from './home/join';



function App() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [whiteHover, setWhiteHover] = useState(false);

  const cursor = (e) => {
    const mouseCursor = document.querySelector('.cursor');
    mouseCursor.style.top = `${e.pageY}px`;
    mouseCursor.style.left = `${e.pageX}px`;

  }



  return (
    <div className="App" onMouseMove={cursor}>
      <div className={`cursor ${mouseOver?'link-grow':''}  ${whiteHover?'white-border':''}` }></div>
      <Navbar setShowModal={setShowModal} setMouseOver={setMouseOver}/>
      <Join showModal={showModal} setShowModal={setShowModal}/>
      <AnimatePresence exitBeforeEnter onExitComplete={()=> setShowModal(false)}>
        <Switch location={location} key={location.key}>
          <Route exact path='/'>
            <Home />
            <Gallery setWhiteHover={setWhiteHover} />
          </Route>
          <Route path='/about'>
            <About setWhiteHover={setWhiteHover}/>
          </Route>
          <Route path='/events'>
            <Events setMouseOver={setMouseOver} />
          </Route>
        </Switch>
      </AnimatePresence>
      <Bottom/>
    </div>
  );
}

export default App;
