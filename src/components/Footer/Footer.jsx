import React from "react";
import { Container } from "reactstrap";
import "./footer.scss";
import {
  GrLinkedinOption,
  GrTwitter,
  GrYoutube,
  GrGithub,
} from "react-icons/gr";

import { AiFillHeart } from 'react-icons/ai';

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <div className="sec aboutus">
            <h2> About us</h2>
            <p>
              Adipisicing culpa ipsum id sunt pariatur ipsum. Est minim enim
              duis elit id voluptate commodo voluptate eiusmod id quis cillum.
              Laborum anim eu laboris pariatur labore do laborum aliqua laboris
              reprehenderit nulla nisi.{" "}
            </p>
            <ul className="sci">
              <li>
                {" "}
                <a href="# ">
                  <GrGithub />
                </a>
              </li>
              <li>
                {" "}
                <a href="# ">
                  <GrTwitter />
                </a>
              </li>
              <li>
                {" "}
                <a href="# ">
                  {" "}
                  <GrYoutube />
                </a>
              </li>
              <li>
                {" "}
                <a href="# ">
                  <GrLinkedinOption />
                </a>
              </li>
            </ul>
          </div>

          <div className="sec quicklinks">
            <h2> Useful Links </h2>
            <ul>
              <li>
                <a href="/ ">Home</a>
              </li>
              <li>
                
                <a href="# ">About</a>
              </li>
              <li>
               
                <a href="# "> Events</a>
              </li>
              <li>
                
                <a href="# "> Gallery</a>
              </li>
              <li>
                <a href="# ">Sponsors</a>
              </li>
              <li>
                
                <a href="/team ">Meet The Team</a>
              </li>
              <li>
               
                <a href="# ">Register</a>
              </li>
            </ul>
          </div>

          <div className="sec contact">
            <h2> Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <i class="" aria-hidden="true"></i>
                </span>
                <span>NMIT BANGALORE</span>
              </li>
              <li>
                <span>
                  <i class="" aria-hidden="true"></i>
                </span>
                <p>
                  <a href="tel: 1234567890">1234567890</a>
                  <br />
                  <a href="tel: 1234567890">1234567890</a>
                </p>
              </li>
              <li>
                <span>
                  <i class="" aria-hidden="true"></i>
                </span>
                <p>
                  <a href="mailto:hackclubnmit@nmit.ac.in">
                    hackclubnmit@nmit.ac.in
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
      <div className="copyright">
        <p> Made With <AiFillHeart /> by HACKCLUB NMIT</p>
      </div>
    </div>
  );
}

export default Footer;
