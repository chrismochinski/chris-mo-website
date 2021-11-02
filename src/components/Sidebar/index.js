import React from "react";
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

import resume from "../../images/MochinskiResume.pdf";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about-me" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="technologies" onClick={toggle}>
            Technologies
          </SidebarLink>
          <SidebarLink to="my-work" onClick={toggle}>
            My Work
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
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
  );
};

export default Sidebar;
