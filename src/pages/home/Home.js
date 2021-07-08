import React from "react";
import { Link } from "react-router-dom";
import Landing from "../../components/LandingPage/landing";
import About from "../../components/Aboutus/About";
import Nav from "../../components/Nav/Nav";
import Contact from "../../components/Contactus/Contact";
import Gallery from "../../components/Gallery/Gallery";
import Event from "../../components/Event/Event";
import FooterPagePro from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/scrollToTop";

import Register from "../../components/Register/Register";
import styles from "../../app.module.css";

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
        <Nav className={styles.sticky} />
        <main>
          <section id="section-1">
            <Landing />
          </section>
          <section id="section-2">
            <About />
          </section>
          <section id="section-3">
            <Gallery/>
          </section>
          <section id="section-4">
            <Event/>
          </section>
          <section id="section-5">
            <Register />
          </section>
          <section id="section-6">
            <Contact/>
          </section>
        </main>
      </div>
      
      <FooterPagePro />
      <ScrollToTop />
    </div>
  );
};

export default Home;
