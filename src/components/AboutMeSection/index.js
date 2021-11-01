import React from "react";
import { Button } from "../ButtonElement";
import BeefPants from '../../images/reactIcon.png';


import {
  AboutMeContainer,
  AboutMeWrapper,
  AboutMeRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./AboutMeElements.js";

const AboutMeSection = ({
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
      <AboutMeContainer lightBg={lightBg} id={id}>
        <AboutMeWrapper>
          <AboutMeRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {/* <BtnWrap>
                  <Button to="technologies"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >
                    My Tools
                    </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={BeefPants} alt={alt}/>
              </ImgWrap>
            </Column2>
          </AboutMeRow>
        </AboutMeWrapper>
      </AboutMeContainer>
    </>
  );
};

export default AboutMeSection;
