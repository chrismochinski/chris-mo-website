import React from "react";

import {
  AboutMeContainer,
  AboutMeWrapper,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "./AboutMeElements.js";

const AboutMeSection = ({
  lightBg,
  topLine,
  lightText,
  headline,
  id,
  darkText,
}) => {
  return (
    <>
      <AboutMeContainer lightBg={lightBg} id={id}>
        <AboutMeWrapper>
          <Column>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>
                My name is Chris Mochinski. Most people call me Mo. I get very
                excited about turning ideas into neat things that people can use.
              </Subtitle>
            </TextWrapper>
          </Column>
        </AboutMeWrapper>
      </AboutMeContainer>
    </>
  );
};

export default AboutMeSection;
