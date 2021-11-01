import React from "react";
import { Button } from "../ButtonElement";
import BeefPants from '../../images/reactIcon.png';


import {
  TechnologiesContainer,
  TechnologiesWrapper,
  TechnologiesRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./TechnologiesElements.js";

const TechnologiesSection = ({
   lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img, //sourcing from elsewhere
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  return (
    <>
      <TechnologiesContainer lightBg={lightBg} id={id}>
        <TechnologiesWrapper>
          <TechnologiesRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                {/* <Subtitle darkText={darkText}>{description}</Subtitle> */}
                {/* <BtnWrap>
                  <Button to="my-work"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >
                    My Work
                    </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={BeefPants} alt={alt}/>
              </ImgWrap>
            </Column2>
          </TechnologiesRow>
        </TechnologiesWrapper>
      </TechnologiesContainer>
    </>
  );
};

export default TechnologiesSection;
