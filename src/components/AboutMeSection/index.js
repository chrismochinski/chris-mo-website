import React from "react";

import {
  AboutMeContainer,
  AboutMeWrapper,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
} from "./AboutMeElements.js";

import puzzlePieces from "../../images/puzzlePieces.png";
import "./AboutMeSection.css";

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
                excited about turning ideas into neat things that people can
                use.
              </Subtitle>
            </TextWrapper>
            <ImgWrapper>
              <img
                className="puzzleImg"
                src={puzzlePieces}
                alt="puzzle"
                style={{ paddingTop: 0, marginTop: 0 }}
              />
            </ImgWrapper>
          </Column>
        </AboutMeWrapper>
      </AboutMeContainer>
    </>
  );
};

export default AboutMeSection;
