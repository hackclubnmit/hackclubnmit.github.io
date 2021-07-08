import React from "react";
import Landing from "../../components/LandingPage/landing";
import About from "../../components/Aboutus/About";
import Events from "../../components/Event/Event";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/scrollToTop";

import Register from "../../components/Register/Register";

const Home = () => {
  let mainNavLinks = document.querySelectorAll("nav ul li a");
  // let mainSections = document.querySelectorAll("main section");

  // let lastId;
  // let cur = [];

  window.addEventListener("scroll", (event) => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach((link) => {
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
    <div>
      <div id="body">
        <Nav />

        <main>
          <section id="section-1">
            <Landing />
          </section>
          <section id="section-2">
            <About />
          </section>
          <section id="section-3">
            <h1>Gallery</h1>
            <h2>A different page should be added for this section</h2>
          </section>
          <section id="section-4">
            <Events />
          </section>
          <section id="section-5">
            <Register />
          </section>
          <section id="section-6">
            <h1>Section 6</h1>
            <h2>Contact us</h2>
          </section>
        </main>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
