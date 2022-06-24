import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #f9f9f9;
  padding: 100px 0;
  height: 100vh;

  display: grid;
  align-items: center;

`;

export const ContactBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;

  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 180px;
    margin-left: 0;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    margin-top: 140px; 
  }
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr); //research
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)}; //research

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}; //research
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  text-align: left;

  @media screen and (max-width: 768px) {
    padding-bottom: 90px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 50px;
    text-align: center;
  }
`;

export const TopLine = styled.div`
  color: #309de7;
  font-size: 22px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const Heading = styled.h1`
  margin-bottom: 8px;
  font-size: 54px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    /* margin-right: 50px;  */
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 768px) {
    font-size: 18px;
    /* margin-right: 50px; */
  }
`;

export const Icon = styled.a`
  font-size: 55px;
  margin: 0 8px;

  display: inline-block;
  position: relative;
  color: #0087ca;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: center;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 55px;
    /* margin-right: 50px; */
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
    /* margin-right: 50px; */
  }
`;

export const IconRow = styled.div`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
`;
