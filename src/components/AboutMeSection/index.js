import React from "react";
import { Button } from "../ButtonElement";
import BeefPants from '../../images/old-git-pic.png';


import {
  AboutMeContainer,
  AboutMeWrapper,
  // AboutMeRow,
  Column1,
  // Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  // ImgWrap,
  // Img
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
          {/* <AboutMeRow imgStart={imgStart}> */}
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>My Name is Chris Mochinski. Most people call me Mo. I get very excited about turning ideas into neat stuff that people can use.</Subtitle>


                {/* IMAGE HERE //IMPORTANT */}


              </TextWrapper>
            </Column1>
            {/* <Column2>
              <ImgWrap>
                <Img src={BeefPants} alt={alt}/>
              </ImgWrap>
            </Column2> */}
          {/* </AboutMeRow> */}
        </AboutMeWrapper>
      </AboutMeContainer>
    </>
  );
};

export default AboutMeSection;
