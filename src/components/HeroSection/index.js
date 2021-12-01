import React, { useState } from "react";
import Video from "../../videos/world.mp4";
import { Button } from "../ButtonElement";
import { Typewriter } from "react-simple-typewriter";
import { useDispatch } from "react-redux";
import useSound from "use-sound";

import "./HeroSection.css";

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

import lowWhoosh from "../../sounds/deepBladeSwing.wav";
import tap from "../../sounds/tap.wav";

const HeroSection = ({sound}) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  const [playOn] = useSound(tap, {volume: 0.3}); //play mousedown tap
  const [playOff] = useSound(lowWhoosh, { volume: 0.4 }); //play mouseup whoosh

  const doNothing = () => {}; //do nothing

  const onHover = () => {
    setHover(!hover);
  };

  const dispatchPageSelectionToRedux = (page) => {
    console.log('page is', page)
    dispatch({type: "SET_SELECTED_PAGE", payload: page})
  }

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted type="video/mp4" src={Video} />
        </HeroBg>
        <HeroContent>
          <HeroH1>My Name is Mo,</HeroH1>
          <HeroP>
            and I love:{" "}
            <Typewriter
              className="typing"
              words={[
                " technology",
                " puzzles",
                " React",
                " JavaScript",
                " rock & roll",
                " web design",
                " CSS",
                " coffee",
                " React Native",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1000}
              // onType={handleType}
            />
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="about-me"
              onMouseDown={() => {
                sound ? playOn() : doNothing();
              }}
              onMouseUp={() => {
                sound ? playOff() : doNothing();
              }}
              onClick={() => dispatchPageSelectionToRedux("about-me")}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
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
