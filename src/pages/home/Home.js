import React from 'react';
import Landing from '../../components/LandingPage/landing';
import About from '../../components/Aboutus/About';
import Events from '../../components/Event/Event';
import Register from '../../components/Register/Register';
const Home = () => {

    let mainNavLinks = document.querySelectorAll("nav ul li a");
    let mainSections = document.querySelectorAll("main section");

    let lastId;
    let cur = [];  

  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
  
    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);
  
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("current");
      } else {
        link.classList.remove("current");
      }
    });
  });
  

  return (
  <div id="body">
      <header>
      </header>
      
      <nav>
        <ul> 
          <li className="mt-5 mb-4"><a href="#section-1"><button  type="button" class="btn btn-outline-success">Hack Club</button></a></li>
          <li className="mb-4"><a href="#section-2"> <button type="button" class="btn btn-outline-secondary">About us</button></a></li>
          <li className="mb-4"><a href="#section-3"> <button type="button" class="btn btn-outline-primary">Gallery</button></a></li>
          <li className="mb-4"><a href="#section-4"> <button type="button" class="btn btn-outline-secondary">Events</button></a></li>
          <li className="mb-4"><a href="#section-5"> <button type="button" class="btn btn-outline-primary">Register</button></a></li>
          <li className="mb-0"><a href="#section-6"> <button type="button" class="btn btn-outline-secondary">Contact us</button></a></li>
        </ul>
      </nav>
      
      <main>
        <section id="section-1">
          <Landing/>
        </section>
        <section id="section-2">
          <About/>
        </section>
        <section id="section-3"> 
          <h1>Gallery</h1>
          <h2>A different page should be added for this section</h2>
        </section>
        <section id="section-4">
          <Events/>
        </section>
        <section id="section-5">
          <Register/>
        </section>
        <section id="section-6">
          <h1>Section 6</h1>
          <h2>Contact us</h2>
        </section>
      </main>
      
      <footer>
        <p>&copy;2018 Footer</p>
      </footer>
  </div>
  )
};

export default Home;
