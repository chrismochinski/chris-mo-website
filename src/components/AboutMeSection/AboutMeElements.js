import styled from "styled-components";

export const AboutMeContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0 0;
  }
`;

export const AboutMeWrapper = styled.div`
  align-items: center;
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutMeRow = styled.div`
  display: grid;
  align-items: center;
`;

export const Column = styled.div`
  margin-bottom: 100px;
  padding: 0 15px;

  @media screen and (max-width: 480px) {
margin-bottom: 180px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */
  text-align: center;
`; 

export const TopLine = styled.div`
  color: #309de7;
  font-size: 20px;
  line-height: 16px; 
  font-weight: 700;
  letter-spacing: 1.4px; 
  text-transform: uppercase; 
  margin-bottom: 12px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ImgWrapper = styled.div`
    display: flex;
  justify-content: center;
`;


