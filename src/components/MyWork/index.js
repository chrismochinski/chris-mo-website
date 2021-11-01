import React from "react";
import {
  MyWorkContainer,
  MyWorkH1,
  MyWorkWrapper,
  MyWorkCard,
  MyWorkIcon,
  MyWorkH2,
  MyWorkP, BtnWrap
} from "./MyWorkElements.js";
import Icon1 from "../../gifs/toDoPreview.gif";
import Icon2 from "../../gifs/galleryInUse2.gif";
import Icon3 from "../../gifs/magicBeans.gif";

const MyWork = () => {
  //fix

  // Icons will become thumbnails or actual embedded Video
  // Each gets two buttons
  //     - Github Link
  //     - The actual app online

  return (
    <>
      <MyWorkContainer id="my-work">
        <MyWorkH1>My Work</MyWorkH1>
        <MyWorkWrapper>

        <MyWorkCard>
            <MyWorkIcon src={Icon3} />
            <MyWorkH2>Magic Beans Cryptofolio</MyWorkH2>
            <MyWorkP>
              A full-stack, feature-rich, playful cryptocurrency tracker
            </MyWorkP>
          </MyWorkCard>

          <MyWorkCard>
            <MyWorkIcon src={Icon1} />
            <MyWorkH2>Full-Stack To Do List</MyWorkH2>
            <MyWorkP>
              A motivating to-do list built from the ground up
            </MyWorkP>
          </MyWorkCard>

          <MyWorkCard>
            <MyWorkIcon src={Icon2} />
            <MyWorkH2>Social Media Photo Gallery</MyWorkH2>
            <MyWorkP>
              A full-stack photo gallery of my 2019/2020 Tour
             </MyWorkP>
          </MyWorkCard>

  
        </MyWorkWrapper>
      
      </MyWorkContainer>
    </>
  );
};

export default MyWork;
