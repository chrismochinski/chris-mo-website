import React from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import useSound from "use-sound";
import { useSelector } from "react-redux";
import "./Footer.css";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  ResumeLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

import resume from "../../images/MochinskiResume.pdf";
import lowWhoosh from "../../sounds/deepBladeSwing.wav";
import tap from "../../sounds/tap.wav";



const Footer = () => {
  const sound = useSelector((store) => store);

  const [playOn] = useSound(tap, { volume: 0.3 }); //play mousedown tap
  const [playOff] = useSound(lowWhoosh, { volume: 0.4 }); //play mouseup whoosh

  const doNothing = () => {}; //do nothing

  

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          {/* <FooterLinkTitle>Footer Heading</FooterLinkTitle> */}

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink
                className="top"
                onMouseDown={() => {
                  sound ? playOn() : doNothing();
                }}
                onMouseUp={() => {
                  sound ? playOff() : doNothing();
                }}
                to="home"
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                Top
              </FooterLink>

              <FooterLink
                to="about-me"
                onMouseDown={() => {
                  sound ? playOn() : doNothing();
                }}
                onMouseUp={() => {
                  sound ? playOff() : doNothing();
                }}
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                About Me
              </FooterLink>
              <FooterLink
                to="technologies"
                onMouseDown={() => {
                  sound ? playOn() : doNothing();
                }}
                onMouseUp={() => {
                  sound ? playOff() : doNothing();
                }}
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                Technologies
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink
                to="my-work"
                onMouseDown={() => {
                  sound ? playOn() : doNothing();
                }}
                onMouseUp={() => {
                  sound ? playOff() : doNothing();
                }}
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                My Work
              </FooterLink>

              <FooterLink
                to="contact"
                onMouseDown={() => {
                  sound ? playOn() : doNothing();
                }}
                onMouseUp={() => {
                  sound ? playOff() : doNothing();
                }}
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                Contact Me
              </FooterLink>

              <a href={resume} download>
                <ResumeLink>My Resume</ResumeLink>
              </a>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Copyright © Chris "Mo" Mochinski 2021 - All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
