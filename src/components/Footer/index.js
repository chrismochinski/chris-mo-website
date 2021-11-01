import React from "react";
import { animateScroll as scroll, Link } from 'react-scroll';


import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          {/* <FooterLinkTitle>Footer Heading</FooterLinkTitle> */}

          <FooterLinksWrapper>
            <FooterLinkItems>
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
              <FooterLink
                to="my-work"
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                My Work
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink
                to="contact"
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                Contact Me
              </FooterLink>
              <FooterLink
                to="resume"
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                My Resume
              </FooterLink>
              <FooterLink
                to="home"
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                Top
              </FooterLink>
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
