import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import { FaBars } from "react-icons/fa"; //always first two letter of the icon
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
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
  VolumeButton,
  LeftContainer,
} from "./NavbarElements";
import "./Navbar.css";
import { useDispatch } from "react-redux";

import lowWhoosh from "../../sounds/deepBladeSwing.wav";
import snaps from "../../sounds/snaps.wav";
import tap from "../../sounds/tap.wav";
import cards from "../../sounds/cards.wav";

import resume from "../../images/MochinskiResume.pdf";

const Navbar = ({ toggle, selectedPage }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [sound, setSound] = useState(false); //true = muted, false = on (default state on)
  const [page, setPage] = useState("");
  const dispatch = useDispatch();

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

  const changeSound = () => {
    console.log("sound changed to:", sound);
    if (sound) {
      setSound(false);
    } else if (!sound) {
      setSound(true);
      play();
    }
    dispatchSoundSettingToRedux(); //call dispatch function for sound setting (right below)
  };

  const dispatchSoundSettingToRedux = () => {
    const action = { type: "SOUND_SETTING", payload: sound };
    dispatch(action);
  };

  const dispatchPageSelectionToRedux = (page) => {
    console.log("page is", page);
    dispatch({ type: "SET_SELECTED_PAGE", payload: page });
  };

  const [play] = useSound(snaps, { volume: 0.3 }); //turn sound on
  const [playOn] = useSound(tap, { volume: 0.3 }); //play mousedown tap
  const [playOff] = useSound(lowWhoosh, { volume: 0.4 }); //play mouseup whoosh
  const [playActive] = useSound(cards, { volume: 0.4 }); //play cards

  const doNothing = () => {}; //do nothing

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <LeftContainer>
              <VolumeButton onClick={changeSound}>{sound ? <MdVolumeUp /> : <MdVolumeOff />}</VolumeButton>
              <NavLogo
                to="home"
                onMouseDown={() => {
                  sound ? playOn() : doNothing();
                }}
                onMouseUp={() => {
                  sound && selectedPage !== "home" ? playOff() : doNothing();
                }}
                onClick={() => dispatchPageSelectionToRedux("home")}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                Chris Mochinski
              </NavLogo>
            </LeftContainer>

            <MobileIcon
              onClick={toggle}
              onMouseDown={() => {
                sound ? playOn() : doNothing();
              }}
              onMouseUp={() => {
                sound ? playActive() : doNothing();
              }}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  className="nav-link"
                  onMouseDown={() => {
                    sound ? playOn() : doNothing();
                  }}
                  onMouseUp={() => {
                    sound && selectedPage !== "about-me" ? playOff() : doNothing();
                  }}
                  onClick={() => dispatchPageSelectionToRedux("about-me")}
                  to="about-me"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  About Me
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="nav-link"
                  onMouseDown={() => {
                    sound ? playOn() : doNothing();
                  }}
                  onMouseUp={() => {
                    sound && selectedPage !== "technologies" ? playOff() : doNothing();
                  }}
                  onClick={() => dispatchPageSelectionToRedux("technologies")}
                  to="technologies"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Technologies
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="nav-link"
                  onMouseDown={() => {
                    sound ? playOn() : doNothing();
                  }}
                  onMouseUp={() => {
                    sound && selectedPage !== "my-work" ? playOff() : doNothing();
                  }}
                  onClick={() => dispatchPageSelectionToRedux("my-work")}
                  to="my-work"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  My Work
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="nav-link"
                  onMouseDown={() => {
                    sound ? playOn() : doNothing();
                  }}
                  onMouseUp={() => {
                    sound && selectedPage !== "contact" ? playOff() : doNothing();
                  }}
                  onClick={() => dispatchPageSelectionToRedux("contact")}
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  // offset={-40} //optimize offset for contact page //fix?? was -80
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
