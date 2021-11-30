import React from "react";

import "./ContactSection.css";

import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

import {
  ContactContainer,
  ContactWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  IconRow,
  Icon,
} from "./ContactElements.js";

const Contact = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  darkText,
}) => {
  return (
    <>
      <ContactContainer lightBg={lightBg} id={"contact"}>
        <ContactWrapper>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
            <IconRow darkText={darkText}>
              <Icon>
                <a href="https://github.com/chrismochinski" target="_blank"
                rel="noreferrer noopener">
                  <FaGithub />
                </a>
              </Icon>
              <Icon>
                <a
                  href="https://www.linkedin.com/in/chrismochinski/"
                  target="_blank" 
                  rel="noreferrer noopener"
                >
                  <FaLinkedin />
                </a>
              </Icon>
              <Icon>
                <a href="https://twitter.com/holymosesmusic" target="_blank" rel="noreferrer noopener">
                  <FaTwitter />
                </a>
              </Icon>
              <Icon>
                <a href="mailto:cmochinski@gmail.com">
                  <FaPaperPlane />
                </a>
              </Icon>
            </IconRow>
          </TextWrapper>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
