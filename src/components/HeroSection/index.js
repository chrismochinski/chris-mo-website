import React, { useState } from "react";
import Video from "../../videos/hero-background-2.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover); //fix is this the button? Maybe destroy...
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted type="video/mp4" src={Video} />
        </HeroBg>
        <HeroContent>
          <HeroH1>My Name Is Mo</HeroH1>
          <HeroP>
            I love: <u>TO MAKE THIS A TYPE AREA</u>
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              Let's Connect {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
