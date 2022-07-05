import React from "react";
import Marquee from "react-fast-marquee";
import "./TechnologiesSection.css";
import ReactImage from "../TechImages/ReactImage";
import JavascriptImage from "../TechImages/JavascriptImage";
import HtmlImage from "../TechImages/HtmlImage";
import NodeImage from "../TechImages/NodeImage";
import CssImage from "../TechImages/CssImage";
import ExpressImage from "../TechImages/ExpressImage";
import MaterialUiImage from "../TechImages/MaterialUiImage";
import ReduxSagaImage from "../TechImages/ReduxSagaImage";
import PostgresImage from "../TechImages/PostgresImage";
import PassportImage from "../TechImages/PassportImage";
import GitImage from "../TechImages/GitImage";
import PhpImage from "../TechImages/PhpImage";
import TailwindImage from "../TechImages/TailwindImage";
import TypescriptImage from "../TechImages/TypescriptImage";
import SassImage from "../TechImages/SassImage";
import AwsImage from "../TechImages/AwsImage";

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
  ImgWrap,
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
  dark2,
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
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Marquee
                  className="marquee"
                  gradientColor={[0, 6, 6]}
                  gradientWidth={30}
                  pauseOnHover={true}
                  speed={115}>
                  <PassportImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <HtmlImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <ReactImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <JavascriptImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <CssImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <MaterialUiImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <ReduxSagaImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <NodeImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <SassImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <ExpressImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <PostgresImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <GitImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <PhpImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <TailwindImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <TypescriptImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
                  <AwsImage
                    style={{
                      "&:hover": {
                        transform: "scale(1.125)",
                        cursor: "pointer",
                        transition: "transform 250ms ease-in-out",
                      },
                    }}
                  />
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
