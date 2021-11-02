import React from "react";
import { animateScroll as scroll, Link } from "react-scroll";

import './Footer.css'

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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          {/* <FooterLinkTitle>Footer Heading</FooterLinkTitle> */}

          <FooterLinksWrapper>
            <FooterLinkItems>

            <FooterLink className="top"
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
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                About Me
              </FooterLink>
              <FooterLink
                to="technologies"
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
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                My Work
              </FooterLink>


              <FooterLink
                to="contact"
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                Contact Me
              </FooterLink>

            
              

              <a href={resume} download>
                <ResumeLink>
                  My Resume
                </ResumeLink>
              </a>

            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Copyright © Chris Mochinski 2021 - All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
