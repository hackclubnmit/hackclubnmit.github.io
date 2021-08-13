import React , { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
import "./navbar.scss"
import logo from "../../assets/logo/logo.png"

const Navbars = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
    <Navbar className="navbar_wrapper" color="dark" dark expand="md">
      <NavbarBrand href="/">Hack Club NMIT</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} className="navbar_item" navbar>
        <Nav navbar>
          <NavItem className="navbar_link">
            <NavLink href="/components/">Events</NavLink>
          </NavItem >
          <NavItem className="navbar_link">
            <NavLink href="/components/">Gallery</NavLink>
          </NavItem>
          <NavItem className="navbar_link">
            <NavLink href="/team/">Teams</NavLink>
          </NavItem>
          <NavItem className="navbar_link">
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>

          <NavItem className="navbar_link">
            <NavLink href="/donate">Donate</NavLink>
          </NavItem>

        </Nav>
        <NavbarText className="navbar_link">Simple Text</NavbarText>
      </Collapse>
      <div className="tag_link">
         <img src={logo}  alt="hackclub-nmit-logo" className="logo"/>
      </div>
    </Navbar>
  </div>
);
}

export default Navbars
