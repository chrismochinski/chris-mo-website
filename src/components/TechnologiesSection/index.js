import React from "react";
import { Button } from "react-scroll";

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
  Img
} from "./TechnologiesElements.js";

const TechnologiesSection = () => {
  return (
    <>
      <TechnologiesContainer>
        <TechnologiesWrapper>
          <TechnologiesRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home"></Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </TechnologiesRow>
        </TechnologiesWrapper>
      </TechnologiesContainer>
    </>
  );
};

export default TechnologiesSection;
