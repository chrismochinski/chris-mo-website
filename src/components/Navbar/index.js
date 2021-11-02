import React, { useState, useEffect } from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import { FaBars } from "react-icons/fa"; //always first two letter of the icon
import { IconContext } from "react-icons/lib"; //quick icon color changes
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import './Navbar.css';

import resume from '../../images/MochinskiResume.pdf'


 

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Chris Mochinski
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  className="nav-link"
                  to="about-me"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-50}
                >
                  About Me
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="nav-link"
                  to="technologies"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-50}
                >
                  Technologies
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="nav-link"
                  to="my-work"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-50}
                >
                  My Work
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="nav-link"
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-50}
                >
                  Contact
                </NavLinks>
              </NavItem>
              <a href={resume} download>
              <NavBtn>
                <NavBtnLink>My Resume</NavBtnLink>
              </NavBtn>
              </a>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
