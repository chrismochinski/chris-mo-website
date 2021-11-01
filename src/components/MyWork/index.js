import React from "react";
import { useHistory } from "react-router";
import {
  MyWorkContainer,
  MyWorkH1,
  MyWorkSubtitle,
  MyWorkWrapper,
  MyWorkCard,
  MyWorkIcon,
  MyWorkH2,
  MyWorkP,
  BtnWrap,
  MyWorkButtonWrapper,
  MyWorkTryItButton,
  MyWorkGitHubButton,
} from "./MyWorkElements.js";
import Icon1 from "../../gifs/toDoPreview.gif";
import Icon2 from "../../gifs/galleryInUse.gif";
import Icon3 from "../../gifs/magicBeans2.gif";
import "./MyWorkStyle.css";

const MyWork = () => {
  const history = useHistory();

  return (
    <>
      <MyWorkContainer id="my-work">
        <MyWorkH1>My Work</MyWorkH1>
        <MyWorkSubtitle>
          I'm proud of this stuff, and I hope you like it. Also, all my GitHub
          repositories have thorough README files. Give 'em a peek!
        </MyWorkSubtitle>
        <MyWorkWrapper>
          <MyWorkCard>
            <a href="https://youtu.be/_slC4RNX-d8" target="_blank">
              <MyWorkIcon src={Icon3} />
            </a>

            <MyWorkH2>Magic Beans Cryptofolio</MyWorkH2>
            <MyWorkP>
              A full-stack, styled-for-mobile, feature-rich cryptocurrency
              tracker.
            </MyWorkP>

            <MyWorkButtonWrapper>
              <a href="http://magicbeanscrypto.com" target="_blank">
                <MyWorkTryItButton>Try</MyWorkTryItButton>
              </a>

              <a
                href="https://github.com/chrismochinski/magic-beans"
                target="_blank"
              >
                <MyWorkGitHubButton>GitHub</MyWorkGitHubButton>
              </a>
            </MyWorkButtonWrapper>
          </MyWorkCard>

          <MyWorkCard>
            <MyWorkIcon src={Icon1} />
            <MyWorkH2>Full-Stack To Do List</MyWorkH2>
            <MyWorkP>
              A motivating and celebratory to-do list built from the ground up.
            </MyWorkP>

            <MyWorkButtonWrapper>
              <a
                href="https://mo-made-a-to-do-list-app.herokuapp.com/"
                target="_blank"
              >
                <MyWorkTryItButton>Try</MyWorkTryItButton>
              </a>
              <a
                href="https://github.com/chrismochinski/weekend-sql-to-do-list"
                target="_blank"
              >
                <MyWorkGitHubButton>GitHub</MyWorkGitHubButton>
              </a>
            </MyWorkButtonWrapper>
          </MyWorkCard>

          <MyWorkCard>
            <MyWorkIcon src={Icon2} />
            <MyWorkH2>EU Tour Photo Gallery</MyWorkH2>
            <MyWorkP>A full-stack photo gallery of my 2019/2020 Tour.</MyWorkP>

            <MyWorkButtonWrapper>
              <a
                href="https://mo-made-a-gallery-app.herokuapp.com/"
                target="_blank"
              >
                <MyWorkTryItButton>Try</MyWorkTryItButton>
              </a>

              <a
                href="https://github.com/chrismochinski/weekend-react-gallery"
                target="_blank"
              >
                <MyWorkGitHubButton>GitHub</MyWorkGitHubButton>
              </a>
            </MyWorkButtonWrapper>
          </MyWorkCard>
        </MyWorkWrapper>
      </MyWorkContainer>
    </>
  );
};

export default MyWork;
