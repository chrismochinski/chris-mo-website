import React from "react";
import useSound from "use-sound";
import { useDispatch } from "react-redux";
import "./Footer.css";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  ResumeLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

import resume from "../../images/MochinskiResume.pdf";
import lowWhoosh from "../../sounds/deepBladeSwing.wav";
import tap from "../../sounds/tap.wav";

const Footer = ({ sound, selectedPage }) => {
  const dispatch = useDispatch();

  const [playOn] = useSound(tap, { volume: 0.3 }); //play mousedown tap
  const [playOff] = useSound(lowWhoosh, { volume: 0.4 }); //play mouseup whoosh

  const doNothing = () => {}; //do nothing

  const dispatchPageSelectionToRedux = (page) => {
    console.log("page is", page);
    dispatch({ type: "SET_SELECTED_PAGE", payload: page });
  };

  return (
    <>
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>

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
                onClick={() => dispatchPageSelectionToRedux("home")}
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                Top
              </FooterLink>

              <FooterLink
                to="about-me"
                onClick={() => dispatchPageSelectionToRedux("about-me")}

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
                onClick={() => dispatchPageSelectionToRedux("technologies")}

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
                onClick={() => dispatchPageSelectionToRedux("my-work")}

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
                onClick={() => dispatchPageSelectionToRedux("contact")}

                onMouseDown={() => {
                  sound ? playOn() : doNothing();
                }}
                onMouseUp={() => {
                  sound && selectedPage !== "contact" ? playOff() : doNothing();
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
              Copyright © Chris "Mo" Mochinski 2022 - All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    </>
  );
};

export default Footer;
