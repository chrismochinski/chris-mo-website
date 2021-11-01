import React from "react";
import {MyWorkContainer, MyWorkH1, MyWorkWrapper, MyWorkCard, MyWorkIcon, MyWorkH2, MyWorkP} from './MyWorkElements.js';
import Icon1 from '../../images/reactIcon.png';
import Icon2 from '../../images/reactIcon.png';
import Icon3 from '../../images/reactIcon.png';


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
            <MyWorkIcon src={Icon1}/>
            <MyWorkH2>My Things N' Stuff</MyWorkH2>
            <MyWorkP>I absolutely love doing this stuff and I can't wait to do more!</MyWorkP>
          </MyWorkCard>

          <MyWorkCard>
            <MyWorkIcon src={Icon2}/>
            <MyWorkH2>My Things N' Stuff2</MyWorkH2>
            <MyWorkP>I absolutely love doing this stuff and I can't wait to do more2!</MyWorkP>
          </MyWorkCard>

          <MyWorkCard>
            <MyWorkIcon src={Icon3}/>
            <MyWorkH2>My Things N' Stuff3</MyWorkH2>
            <MyWorkP>I absolutely love doing this stuff and I can't wait to do more3!</MyWorkP>
          </MyWorkCard>

        </MyWorkWrapper>
      </MyWorkContainer>
    </>
  );
};

export default MyWork;
