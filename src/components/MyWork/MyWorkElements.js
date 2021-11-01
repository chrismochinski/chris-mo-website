import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const MyWorkContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const MyWorkWrapper = styled.div`
max-width: 1000px;
  /* margin: 0 0; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;


export const MyWorkCard = styled.div` 
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 22px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    max-width: 460px;
  }
`;

export const MyWorkIcon = styled.img`
  height: 150px;
  margin-bottom: 15px;

  @media screen and (max-width: 480px) {
      max-width: 300px;
}
`;

export const MyWorkH1 = styled.h1`
 font-size: 2.8rem;
  color: #fff;
  margin-bottom: 15px;
  border-bottom: 4px solid #309DE7;
  text-transform: uppercase; //research
  line-height: 42px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;


export const MyWorkSubtitle = styled.h2`
margin-left: 10%;
margin-right: 10%;
padding-top: 0;
  padding-bottom: 30px;
  text-align: center;
  font-size: 22px;
  line-height: 24px;
  font-weight: 200;
  color: #f7f8fa;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;




export const MyWorkH2 = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const MyWorkP = styled.p`
 font-size: .9rem;
  text-align: center;
`;










export const MyWorkButtonWrapper = styled.div`
margin-top: 10px;
display: flex;
align-items: left;
font-weight: 400;

`;


export const MyWorkTryItButton = styled.a`
border-radius: 10px;
background: #010606;
white-space: nowrap; //research
padding: 5px 9px;
margin: 4px;
margin-bottom: 0px;
color: #fff;
font-size: 16px;
font-weight: 400;
text-decoration: none;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #309DE7;
    /* font-size: 16px; */
  };

  @media screen and (max-width: 768px) {
    font-size: 20px;
  };

  @media screen and (max-width: 480px) {
    font-size: 24px;
  };
`;

export const MyWorkGitHubButton = styled.a`
border-radius: 10px;
background: #010606;
white-space: nowrap; //research
padding: 5px 9px;
margin: 4px;
margin-bottom: 0px;
color: #fff;
font-size: 16px;
font-weight: 400;
text-decoration: none;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #309DE7;
    /* font-size: 16px; */
  };

  @media screen and (max-width: 768px) {
    font-size: 20px;
  };

  @media screen and (max-width: 480px) {
    font-size: 24px;
  };
`;



