import React from "react";
import useSound from "use-sound";
import { useSelector } from "react-redux";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements.js";

import lowWhoosh from "../../sounds/deepBladeSwing.wav";
import tap from "../../sounds/tap.wav";
import cards from "../../sounds/cards.wav";
import resume from "../../images/MochinskiResume.pdf";

const Sidebar = ({ isOpen, toggle, sound, selectedPage }) => {
  // const sound = useSelector((store) => store); //deletelater might not be necessary w/ props!

  const [playOn] = useSound(tap, { volume: 0.3 }); //play mousedown tap
  const [playOff] = useSound(lowWhoosh, { volume: 0.4 }); //play mouseup whoosh
  const [playActive] = useSound(cards, { volume: 0.4 }); //play cards

  const doNothing = () => {}; //do nothing


  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon
        onClick={toggle}
        onMouseDown={() => {
          sound ? playOn() : doNothing();
        }}
        onMouseUp={() => {
          sound ? playActive() : doNothing();
        }}
      >
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about-me"
            onMouseDown={() => {
              sound ? playOn() : doNothing();
            }}
            onMouseUp={() => {
              sound ? playOff() : doNothing();
            }}
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            // offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="technologies"
            onMouseDown={() => {
              sound ? playOn() : doNothing();
            }}
            onMouseUp={() => {
              sound ? playOff() : doNothing();
            }}
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            // offset={-80}
          >
            Technologies
          </SidebarLink>
          <SidebarLink
            to="my-work"
            onMouseDown={() => {
              sound ? playOn() : doNothing();
            }}
            onMouseUp={() => {
              sound ? playOff() : doNothing();
            }}
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            // offset={-80}
          >
            My Work
          </SidebarLink>
          <SidebarLink
            to="contact"
            onMouseDown={() => {
              sound ? playOn() : doNothing();
            }}
            onMouseUp={() => {
              sound ? playOff() : doNothing();
            }}
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            // offset={-80}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <a href={resume} download>
            <SidebarRoute>My Resume</SidebarRoute>
          </a>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
    </>
  );
};

export default Sidebar;
