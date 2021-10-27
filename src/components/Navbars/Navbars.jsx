import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
} from "reactstrap";
import "./navbar.scss";
import  {Link}  from "react-router-dom";
//import logo from "../../assets/logo/logo.png";

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="navbar_wrapper" dark expand="md">
        <NavbarBrand href="/">Hack Club NMIT</NavbarBrand>
        <NavbarToggler className="navbar_toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} className="navbar_item" navbar>
          <Nav navbar>
            <NavItem className="navbar_link">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem className="navbar_link">
              <Link to="/events/">Events</Link>
            </NavItem>
            <NavItem className="navbar_link">
              <Link to="/gallery/">Gallery</Link>
            </NavItem>
            <NavItem className="navbar_link">
              <Link to="/team/">Teams</Link>
            </NavItem>
            {/*<NavItem className="navbar_link">
              <Link to="https://github.com/hackclubnmit">
                GitHub
              </Link>
  </NavItem>*/}
            {/* <NavItem className="navbar_link">
              <Link to="/donate">Donate</Link>
                </NavItem>*/}
            <NavItem className="navbar_link">
              <Link to="/contact/">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
        {/* <div className="tag_link">
          <img src={logo} alt="hackclub-nmit-logo" className="logo" />
              </div> */}
      </Navbar>
    </div>
  );
};

export default Navbars;
