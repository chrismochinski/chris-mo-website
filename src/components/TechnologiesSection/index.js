import React from "react";
import { Button } from "../ButtonElement";
import Marquee from "react-fast-marquee";
import './TechnologiesSection.css'
import ReactImage from "../TechImages/ReactImage";
import JavascriptImage from "../TechImages/JavascriptImage";
import HtmlImage from "../TechImages/HtmlImage";
import NodeImage from "../TechImages/NodeImage";
import CssImage from "../TechImages/CssImage";
import ExpressImage from "../TechImages/ExpressImage";
import MaterialUiImage from "../TechImages/MaterialUiImage";
import ReduxSagaImage from "../TechImages/ReduxSagaImage";


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
                <Subtitle darkText={darkText}>{description}</Subtitle>
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
              <Marquee 
              className='marquee' 
              gradientColor={[0, 6, 6]}
              pauseOnHover={true}
              speed={70}
              >
                <ReactImage />
                <JavascriptImage />
                <ReduxSagaImage />
                <HtmlImage />
                <CssImage />
                <MaterialUiImage />
                <NodeImage />
                <ExpressImage />
                </Marquee>
              </ImgWrap>
            </Column2>
          </TechnologiesRow>
        </TechnologiesWrapper>
      </TechnologiesContainer>
    </>
  );
};

export default TechnologiesSection;
