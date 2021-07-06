import React from 'react';
import Landing from '../../components/LandingPage/landing';
import Nav from '../../components/Nav/Nav';
import About from '../../components/Aboutus/About';
import Events from './components/Events/Event';
const Home = () => {
  return (
  <div>
    <Nav />
   <Landing />
   <About />
   <Events/>
  </div>
  )
};

export default Home;
