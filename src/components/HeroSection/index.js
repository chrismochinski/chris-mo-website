import React, { useState, useEffect } from "react";
import Video from "../../videos/world.mp4";
import { Button } from "../ButtonElement";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

import './HeroSection.css'

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
    setHover(!hover); 
  };

  // const handleType = (count: number) => {
  //   console.log(count)
  // }


  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted type="video/mp4" src={Video} />
        </HeroBg>
        <HeroContent>
          <HeroH1>My Name is Mo,</HeroH1>
          <HeroP>
            and I love: {" "} 
          
          <Typewriter className='typing'
         
          words={['technology', 'web design', 'React', 'JavaScript', 'rock & roll', 'mobile development', 'puzzles', 'full-stack development', 'coffee']}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={90}
          deleteSpeed={60}
          delaySpeed={1000}
          // onType={handleType}
          />

          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="about-me"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              to="about-me"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              About Me {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
