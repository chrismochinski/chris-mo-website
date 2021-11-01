import React, { useState, useEffect } from "react";
import { animateScroll as scroll, Link } from 'react-scroll';
import { FaBars } from "react-icons/fa"; //always first two letter of the icon
import { IconContext } from 'react-icons/lib'; //quick icon color changes
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";



const Navbar = ({ toggle }) => {

const [scrollNav, setScrollNav] = useState(false);

const changeNav = () => {
  if(window.scrollY >= 80) {
    setScrollNav(true);
  } else {
    setScrollNav(false);
  }
}

useEffect(() => {
  window.addEventListener('scroll', changeNav);
}, []);

// const toggleHome = () => {
//   scroll.scrollToTop();
// };

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>Greetings!</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about-me"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="technologies"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>Technologies</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="my-work"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>My Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>Contact</NavLinks>
            </NavItem>
            <NavBtn>
                <NavBtnLink to="/resume">My Resume</NavBtnLink>
            </NavBtn>
          
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
