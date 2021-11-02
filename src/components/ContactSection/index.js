import React, { useState } from "react";

import "./ContactSection.css";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaRedPaperPlane,
} from "react-icons/fa";

import {
  ContactContainer,
  ContactWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  IconRow,
  Icon,
  EmailButton,
  Airplane1,
  Airplane2,
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
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

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
                <a href="https://github.com/chrismochinski" target="_blank">
                  <FaGithub />
                </a>
              </Icon>
              <Icon>
                <a
                  href="https://www.linkedin.com/in/chrismochinski/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </Icon>
              <Icon>
                <a href="https://twitter.com/holymosesmusic" target="_blank">
                  <FaTwitter />
                </a>
              </Icon>
              <Icon>
                <a href="mailto:cmochinski@gmail.com" target="_blank">
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
