import React from 'react';
import Landing from '../../components/LandingPage/landing';
import Nav from '../../components/Nav/Nav';
import About from '../../components/Aboutus/About';
import Events from '../../components/Event/Event';
import Sponsors from '../../components/Sponsors/Sponsors';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
  <div>
    <Nav />
   <Landing />
   <About />
   <Events/>
   <Sponsors />
   <Footer />
  </div>
  )
};

export default Home;
