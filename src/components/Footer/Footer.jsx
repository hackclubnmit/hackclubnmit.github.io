import React from "react";
import { Container } from "reactstrap";
import "./footer.scss";
import {
  GrLinkedinOption,
  GrTwitter,
  GrYoutube,
  GrGithub,
} from "react-icons/gr";

import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <Container className="footer_container">
          <div className="sec aboutus">
            <h2> About us</h2>
            <p>
              Hack club NMIT is a non-profit organization which is entirely student led. This is a place for makers who come together to create an inclusive environment and community that strives continuously to learn,build and create.
            </p>
            <ul className="sci p-0">
              <li>
                {" "}
                <a href="https://github.com/hackclubnmit">
                  <GrGithub />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com/HackClubNmit">
                  <GrTwitter />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.youtube.com/channel/UCMcJ0_61s_G1UvPbVPs2edw">
                  {" "}
                  <GrYoutube />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.linkedin.com/company/hackclubnmit/">
                  <GrLinkedinOption />
                </a>
              </li>
            </ul>
          </div>

          <div className="sec quicklinks">
            <h2> Useful Links </h2>
            <ul className="quicklinks_links p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="/events"> Events</Link>
              </li>
              <li>
                <Link to="/gallery"> Gallery</Link>
              </li>
              <li>
                <Link to="#">Sponsors</Link>
              </li>
              <li>
                <Link to="/team">Meet The Team</Link>
              </li>
              <li>
                <Link to="# ">Register</Link>
              </li>
              <li>
                <Link to="/donate">Dontate</Link>
              </li>
            </ul>
          </div>

          <div className="sec contact">
            <h2> Contact Info</h2>
            <ul className="info p-0">
              <li>
                <span>
                  <i className="" aria-hidden="true"></i>
                </span>
                <span>Nitte Meenakshi Institute of Technology
                </span>
              </li>
              <li>
                <span>
                  <i className="" aria-hidden="true"></i>
                </span>
                <p>
                  <a href="tel: 080 2216 7842">080 2216 7842</a>
                  <br />
                  <a href="tel: 94485 07073">94485 07073</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="" aria-hidden="true"></i>
                </span>
                <p>
                  <a href="mailto:hackclub@nmit.ac.in">
                    hackclub@nmit.ac.in
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
      <div className="copyright">
        <p>
          Made With <AiFillHeart className="copyright_icon" /> by HACKCLUB NMIT
        </p>
      </div>
    </div>
  );
}

export default Footer;
